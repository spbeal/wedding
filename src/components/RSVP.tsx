import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  TextField,
  Alert,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  CircularProgress,
  Chip,
} from "@mui/material";
import { useState } from "react";

export default function RSVP() {
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    phone: "",
    attending: "yes",
    adults: "1",
    children: "0",
    guestNames: [] as string[],
    dietary: "",
    notes: "",
    totalGuests: "1",
  });
  const [guestInput, setGuestInput] = useState("");
  const [totalEdited, setTotalEdited] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [lastSubmission, setLastSubmission] = useState<any>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target as HTMLInputElement;
    if (name === "adults" || name === "children") {
      const newAdults =
        name === "adults" ? value : String(formData.adults || "0");
      const newChildren =
        name === "children" ? value : String(formData.children || "0");
      const newTotal = String(
        Number(newAdults || 0) + Number(newChildren || 0),
      );
      setFormData((prev: any) => ({
        ...prev,
        [name]: value,
        ...(totalEdited ? {} : { totalGuests: newTotal }),
      }));
    } else if (name === "totalGuests") {
      setTotalEdited(true);
      setFormData((prev: any) => ({ ...prev, totalGuests: value }));
    } else if (name === "phone") {
      let digits = value.replace(/\D/g, "");
      digits = digits.slice(0, 10); // limit to 10 digits
      let formatted = digits;
      if (digits.length <= 3) formatted = digits;
      else if (digits.length <= 6) formatted = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
      else formatted = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
      setFormData((prev: any) => ({ ...prev, phone: formatted }));
    } else {
      setFormData((prev: any) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!formData.name || !formData.email) {
      setError("Please provide name and email.");
      return;
    }
    if (
      formData.attending === "yes" &&
      (!formData.adults || Number(formData.adults) < 1)
    ) {
      setError("Please enter number of adults attending.");
      return;
    }

    // validate phone if provided (expect 10 digits)
    if (formData.phone) {
      const digits = String(formData.phone).replace(/\D/g, "");
      if (digits.length !== 10) {
        setError("Please enter a valid 10-digit phone number or leave blank.");
        return;
      }
    }

    setSubmitting(true);
    try {
      const endpoint = `https://formspree.io/f/mkoqvwkd`;
      const payload = new FormData();
      Object.entries(formData).forEach(([k, v]) => {
        const keyName = k === "totalGuests" ? "Total guests eating" : k;
        if (Array.isArray(v)) payload.append(keyName, v.join("; "));
        else payload.append(keyName, String(v));
      });

      const res = await fetch(endpoint, {
        method: "POST",
        body: payload,
        headers: { Accept: "application/json" },
      });

      const data = await res.json();
      if (res.ok) {
        setLastSubmission(formData);
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          attending: "yes",
          adults: "1",
          children: "0",
          guestNames: [],
          dietary: "",
          notes: "",
          totalGuests: "1",
        });
        setGuestInput("");
      } else {
        setError(data.error || "Submission failed. Please try again later.");
      }
    } catch (err) {
      setError("Submission failed. Please check your connection.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box
      id="rsvp"
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: "primary.light",
      }}
    >
      <Container>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            mb: 6,
            color: "secondary.main",
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -16,
              left: "50%",
              transform: "translateX(-50%)",
              width: 80,
              height: 3,
              backgroundColor: "primary.main",
            },
          }}
        >
          RSVP
        </Typography>

        <Box sx={{ maxWidth: 600, mx: "auto" }}>
          <Typography
            variant="h5"
            sx={{ mb: 3, color: "text.primary", textAlign: "center" }}
          >
            We can't wait to celebrate with you! Use the form below to RSVP.
          </Typography>

          <Paper
            elevation={3}
            sx={{ p: 3, mb: 3, borderRadius: 2, backgroundColor: "white" }}
          >
            <Typography variant="h6" sx={{ textAlign: "center", mb: 2 }}>
              RSVP Form
            </Typography>

            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}

            {success ? (
              <Box sx={{ textAlign: "center", py: 3 }}>
                <Typography variant="h6">Thank you for RSVPing!</Typography>
                <Typography
                  sx={{ mt: 1 }}
                >{`Thanks${lastSubmission?.name ? `, ${lastSubmission.name}` : ""} — we've received your response.`}</Typography>
                <Box sx={{ mt: 2 }}>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      setSuccess(false);
                      setLastSubmission(null);
                      setTotalEdited(false);
                    }}
                  >
                    Submit another response
                  </Button>
                </Box>
              </Box>
            ) : (
              <Box component="form" onSubmit={handleSubmit} noValidate>
                <TextField
                  label="Full name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  fullWidth
                  required
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  required
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="Phone (optional)"
                  name="phone"
                  type="tel"
                  value={formData.phone || ""}
                  onChange={handleChange}
                  fullWidth
                  sx={{ mb: 2 }}
                />

                <FormControl component="fieldset" sx={{ mb: 2 }}>
                  <FormLabel component="legend">Will you attend?</FormLabel>
                  <RadioGroup
                    row
                    name="attending"
                    value={formData.attending}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>

                {formData.attending === "yes" && (
                  <>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 2,
                        mb: 2,
                        flexWrap: "wrap",
                        alignItems: "center",
                      }}
                    >
                      <TextField
                        label="Adults"
                        name="adults"
                        type="number"
                        inputProps={{ min: 0 }}
                        value={formData.adults}
                        onChange={handleChange}
                        sx={{ flex: 1 }}
                      />
                      <TextField
                        label="Children"
                        name="children"
                        type="number"
                        inputProps={{ min: 0 }}
                        value={formData.children}
                        onChange={handleChange}
                        sx={{ flex: 1 }}
                      />
                      <TextField
                        label="Total guests eating"
                        name="totalGuests"
                        value={formData.totalGuests}
                        onChange={handleChange}
                        sx={{ width: 180 }}
                      />
                    </Box>

                    <Box sx={{ mb: 2 }}>
                      <TextField
                        label="Guest names (press enter after each name)"
                        placeholder="e.g. Samuel Beal"
                        value={guestInput}
                        onChange={(e) => setGuestInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            const v = guestInput.trim();
                            if (v) {
                              setFormData((prev: any) => ({
                                ...prev,
                                guestNames: [...(prev.guestNames || []), v],
                              }));
                              setGuestInput("");
                            }
                          }
                        }}
                        fullWidth
                        sx={{ mb: 1 }}
                      />

                      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                        {(formData.guestNames || []).map(
                          (g: string, idx: number) => (
                            <Chip
                              key={idx}
                              label={g}
                              onDelete={() =>
                                setFormData((prev: any) => ({
                                  ...prev,
                                  guestNames: prev.guestNames.filter(
                                    (_: any, i: number) => i !== idx,
                                  ),
                                }))
                              }
                            />
                          ),
                        )}
                      </Box>
                    </Box>

                    <TextField
                      label="Dietary restrictions / Allergies"
                      name="dietary"
                      value={formData.dietary}
                      onChange={handleChange}
                      fullWidth
                      multiline
                      rows={2}
                      sx={{ mb: 2 }}
                    />
                  </>
                )}

                <TextField
                  label="Anything else?"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  fullWidth
                  multiline
                  rows={3}
                  sx={{ mb: 2 }}
                />

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 2,
                    mt: 2,
                  }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={submitting}
                    startIcon={
                      submitting ? <CircularProgress size={18} /> : null
                    }
                  >
                    {submitting ? "Sending..." : "Submit RSVP"}
                  </Button>
                </Box>
              </Box>
            )}
          </Paper>
          <Typography
            variant="body1"
            sx={{
              mt: 4,
              fontStyle: "italic",
              color: "text.secondary",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Please respond by May 15th, 2026
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

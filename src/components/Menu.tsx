import { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, List, ListItem, ListItemText, Button } from '@mui/material';
import { Restaurant as RestaurantIcon } from '@mui/icons-material';

interface MenuCategory {
  title: string;
  items: string[];
}

const menuCategories: MenuCategory[] = [
  {
    title: 'Appetizers',
    items: [
      'Bruschetta with Fresh Tomatoes',
      'Spinach and Artichoke Dip',
      'Caprese Skewers',
    ],
  },
  {
    title: 'Main Course',
    items: [
      'Herb-Crusted Salmon',
      'Beef Tenderloin with Red Wine Sauce',
      'Vegetarian Risotto',
    ],
  },
  {
    title: 'Dessert',
    items: [
      'Wedding Cake',
      'Chocolate Mousse',
      'Fresh Fruit Platter',
    ],
  },
  {
    title: 'Beverages',
    items: [
      'Wine Selection',
      'Signature Cocktails',
      'Non-Alcoholic Options',
    ],
  },
];

export default function Menu() {
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  return (
    <Box
      id="menu"
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: 'background.default',
      }}
    >
      <Container>
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: 'secondary.main',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -16,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 80,
              height: 3,
              backgroundColor: 'primary.main',
            },
          }}
        >
          Menu
        </Typography>

        {showPlaceholder ? (
          <Card
            sx={{
              maxWidth: 680,
              mx: 'auto',
              textAlign: 'center',
              py: 6,
              px: 4,
              bgcolor: 'background.paper',
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <RestaurantIcon sx={{ fontSize: 48, color: 'primary.main' }} />
              </Box>
              <Typography variant="h4" sx={{ color: 'secondary.main', mb: 1 }}>
                Coming Soon
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
                We're finalizing the menu. Please check back soon for details.
              </Typography>
              {/* <Button variant="text" onClick={() => setShowPlaceholder(false)}>
                View Full Menu
              </Button> */}
            </CardContent>
          </Card>
        ) : (
          <>
            <Grid container spacing={4} justifyContent="center">
              {menuCategories.map((category, index) => (
                <Grid key={index}>
                  <Card
                    sx={{
                      height: '100%',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 6,
                      },
                    }}
                  >
                    <CardContent>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 2,
                        }}
                      >
                        <RestaurantIcon
                          sx={{
                            fontSize: 40,
                            color: 'primary.main',
                          }}
                        />
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{
                          textAlign: 'center',
                          mb: 3,
                          color: 'secondary.main',
                          borderBottom: '2px solid',
                          borderColor: 'primary.main',
                          pb: 1,
                        }}
                      >
                        {category.title}
                      </Typography>
                      <List>
                        {category.items.map((item, itemIndex) => (
                          <ListItem
                            key={itemIndex}
                            sx={{
                              py: 1,
                              borderBottom: itemIndex < category.items.length - 1 ? '1px solid' : 'none',
                              borderColor: 'primary.light',
                            }}
                          >
                            <ListItemText
                              primary={item}
                              primaryTypographyProps={{
                                sx: {
                                  color: 'text.primary',
                                  '&::before': {
                                    content: '"• "',
                                    color: 'primary.main',
                                    fontWeight: 'bold',
                                    marginRight: 1,
                                  },
                                },
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <Button variant="text" onClick={() => setShowPlaceholder(true)}>
                Show Coming Soon
              </Button>
            </Box>
          </>
        )}
      </Container>
    </Box>
  );
}

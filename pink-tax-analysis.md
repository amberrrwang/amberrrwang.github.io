---
layout: page
title: "Pink Tax Analysis"
permalink: /pink-tax-analysis/
---

# Pink Tax Analysis: Gender-Based Pricing in Retail Clothing

## Abstract
This project analyzes gender-based pricing differences (commonly referred to as the “pink tax”) in retail clothing using real-world data from Zara. The goal is to examine whether women’s clothing is systematically priced higher than men’s clothing across different product categories and to understand how pricing patterns vary by category and dataset composition.

This project was developed as part of the Data Science in Practice course at the University of California, San Diego.

## Project Motivation
The “pink tax” refers to the phenomenon in which products marketed toward women are priced higher than similar products marketed toward men. While this concept is widely discussed, empirical evidence can vary significantly depending on product category, brand strategy and dataset composition.

This project uses data-driven analysis to investigate:
- Whether gender-based price differences exist in retail clothing
- How pricing patterns differ across clothing categories
- How dataset imbalance can affect conclusions drawn from analysis

## Data Source
Retail clothing data scraped from Zara.

Each item includes:
- Gender (Men / Women)
- Product category
- Price
- Additional product attributes (when available)

## Research Question
How do gender-based pricing differences vary across different product categories in retail clothing?
Is the price difference significant for male and female products in any of the clothing categories?
If so, which clothing categories and which ones are more expensive?

### Hypothesis
Gender-based price disparities are significant in the categories investigated and women pay more than men for functionally identical products in different clothing categories.
- We predict that this difference occurs because social norms expect women to put more effort into self-maintenance and appearance, which leads women to being more willing to pay more for products related to beauty. This inclines the sellers to increase the price of women’s products.


## Exploratory Data Analysis
### Distribution of price in each clothing category
![Pink Tax Chart](/images/distribution-of-price.png)
![Pink Tax Chart](/images/density-plot-of-price.png)

### Category Analysis
#### Shirts
![Pink Tax Chart](/images/shirts.png)
![Pink Tax Chart](/images/shirts-box.png)
#### Jeans
![Pink Tax Chart](/images/jeans.png)
![Pink Tax Chart](/images/jeans-box.png)
#### Trousers
![Pink Tax Chart](/images/trousers.png)
![Pink Tax Chart](/images/trousers-box.png)
#### Jackets
![Pink Tax Chart](/images/jackets.png)
![Pink Tax Chart](/images/jackets-box.png)
#### Blazers
![Pink Tax Chart](/images/blazers.png)
![Pink Tax Chart](/images/blazers-box.png)
#### Shoes
![Pink Tax Chart](/images/shoes.png)
![Pink Tax Chart](/images/shoes-box.png)

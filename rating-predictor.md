---
layout: page
title: "Beauty Product Rating Predictor"
permalink: /beauty-product-rating-predictor/
---

# Beauty Product Rating Predictor

## Abstract
This project develops an interactive analytics and prediction tool using Sephora beauty product data. The application performs exploratory data analysis and visualizations to examine pricing trends and product performance across categories. The project also includes a machine learning model that predicts whether a product is likely to be highly rated based on features such as price, brand and category. A Tkinter GUI allows users to explore the dataset and generate rating predictions interactively.

The project was completed as part of the Programming Languages and Techniques course at the University of Pennsylvania.

## Project Motivation
Sephora is one of the largest cosmetic retailers, offering a wide variety of beauty and skincare products. With the large number of products available, it can be difficult for customers to search through reviews and ratings individually when making purchasing decisions.

This project aims to simplify the shopping process by helping users identify products that are likely to receive high ratings based on different features. Through data analysis and predictive modeling, the application makes product discovery more efficient and improves the overall shopping experience.

## Data Source
Cosmetic and skincare product data scraped from Sephora.

The dataset includes product features such as:
- Brand
- Category
- Product name
- Rating
- Number of reviews
- Marketing-related information
- Selling channels
- and other relevant product attributes relevant

## Data Cleaning
- Removed unnecessary and highly text-based columns that were not relevant to the analysis and prediction tasks.
- Applied one-hot encoding to categorical variables such as product category and brand.
- Kept only the top 20 most frequent brands to simplify the model and reduce dimensionality.

## Exploratory Data Analysis
### Distribution of Rating
![Beauty Visual](/beauty-images/rating.png)

The rating distribution is skewed toward higher values (skewed to the right), with most products receiving ratings above 4.0. This shows a strong positive bias in customer reviews, where the majority of products are rated favorably, suggesting that people are more likely to leave reviews if they like the product.

### Distribution of Rating by Price Range
![Beauty Visual](/beauty-images/rating-price.png)

Ratings remain relatively high across all price ranges, with no clear trend as price increases. This suggests that higher-priced products do not necessarily deliver better customer satisfaction, and that product quality perception is relatively stable across different price tiers.

### Brand and Category Analysis
![Beauty Visual](/beauty-images/average-rating.png)
![Beauty Visual](/beauty-images/top-categories.png)

While there are slight variations in average ratings across brands and categories, the differences are relatively small, with most values clustered between 3.5 and 4.5. This suggests that no single factor strongly determines product ratings, showing the need for a multi-feature predictive model.

### Exclusivity and Marketing Analysis
![Beauty Visual](/beauty-images/exclusivity.png)

There is no significant difference in rating distributions between exclusive and non-exclusive products, suggesting that exclusivity alone does not drive higher customer satisfaction.

![Beauty Visual](/beauty-images/marketing.png)
![Beauty Visual](/beauty-images/marketing2.png)

Marketing flags show a limited impact on product ratings. While a simple comparison suggests slightly lower ratings for marketed products, a more detailed breakdown reveals that the effect varies by marketing type. This indicates that marketing does not consistently improve customer satisfaction and its impact is not uniform.

### Distribution of Price
![Beauty Visual](/beauty-images/price.png)

The price distribution is right-skewed, with the majority of products concentrated in lower price ranges and a small number of high-priced outliers. This suggests that most products in the dataset are relatively affordable, with only a limited number of premium-priced items.

### Correlation Analysis
![Beauty Visual](/beauty-images/correlation.png)

The correlation matrix shows that product ratings have weak relationships with individual features such as price, reviews and marketing indicators. While some features are strongly correlated with each other, none exhibit a strong direct relationship with ratings. This suggests that customer satisfaction is influenced by a combination of factors rather than any single attribute.

## Predictor Model

## Interactive Application

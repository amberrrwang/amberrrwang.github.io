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

Each item includes features such as:
- brand
- category
- name
- rating
- number of reviews
- marketing
- selling channels
- and more...

## Data Cleaning
- Removed unnecessary and highly text-based columns that were not relevant to the analysis and prediction tasks.
- Applied one-hot encoding to categorical variables such as product category and brand.
- Kept only the top 20 most frequent brands to simplify the model and reduce dimensionality.

## Exploratory Data Analysis
### Distribution of Rating
![Beauty Visual](/beauty-images/rating.png)

The rating distribution is skewed toward higher values (skewed to the right), with most products receiving ratings above 4.0. This shows a strong positive bias in customer reviews, where the majority of products are rated favorably, suggesting that people are more likely to leave reviews if they like the product.

![Beauty Visual](/beauty-images/rating-price.png)

Ratings remain relatively high across all price ranges, with no clear trend as price increases. This suggests that higher-priced products do not necessarily deliver better customer satisfaction, and that product quality perception is relatively stable across different price tiers.

![Beauty Visual](/beauty-images/average-rating.png)
![Beauty Visual](/beauty-images/top-categories.png)

While there are slight variations in average ratings across brands and categories, the differences are relatively small, with most values clustered between 3.5 and 4.5. This suggests that no single factor strongly determines product ratings, showing the need for a multi-feature predictive model.

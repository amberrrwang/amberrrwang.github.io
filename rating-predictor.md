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


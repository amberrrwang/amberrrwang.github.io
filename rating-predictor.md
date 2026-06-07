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
In this project, products with ratings greater than or equal to 4.0 were initially classified as highly rated products. Two classification models were used in this project: Logistic Regression and Random Forest.

### Model Performance

| Model | Threshold | Accuracy |
|---|---|---|
| Logistic Regression | Rating ≥ 4.0 | 0.779 |
| Logistic Regression (Class Weighted) | Rating ≥ 4.0 | 0.607 |
| Random Forest | Rating ≥ 4.0 | 0.809 |
| Logistic Regression | Rating ≥ 4.2 | 0.597 |
| Random Forest | Rating ≥ 4.2 | 0.621 |

The results show that the Random Forest model achieved the highest overall accuracy under both rating thresholds, suggesting that nonlinear relationships between product features may better explain product ratings. As the rating threshold increased from 4.0 to 4.2, the model accuracy decreased because fewer products satisfied the “highly rated” condition, making the classification task more difficult and creating a more imbalanced dataset.

### Feature Importance Analysis
![Beauty Visual](/beauty-images/feature4.png)
![Beauty Visual](/beauty-images/feature4.2.png)

The feature importance result from the Random Forest models shows that `number_of_reviews`, `love` and `price` were the most influential features in predicting highly rated products under both rating thresholds. `number_of_reviews` had the highest importance score, suggesting that products with greater customer engagement were more likely to receive high ratings. The `love` feature and `price` also played significant roles in the predictions. In comparison, marketing flags and category-related variables had relatively smaller impacts on model performance.

The feature importance patterns remained similar across both the 4.0 and 4.2 thresholds, indicating consistent relationships between product popularity, customer engagement and ratings.

## Interactive Application

## Business Implications
### Customer Engagement as a Key Performance Driver
The number of reviews and love count are the strongest predictors of highly rated products, suggesting that product popularity and customer engagement may play a larger role in predicting ratings than specific brand or category characteristics. However, one limitation of this analysis is that brand and category variables were one-hot encoded for modeling purposes, causing their influence to be distributed across multiple individual features. Thus, the feature importance scores do not fully capture the overall impact of brand or category on product ratings. Additional descriptive analysis showed only modest differences in average ratings across the top brands and categories. While these findings suggest that brand and category may be less influential than popularity-related metrics, further analysis would be needed to determine their true effect on product ratings.

### Pricing and Product Positioning
Price emerged as the third most important predictor of product ratings, indicating that customer satisfaction is closely tied to product positioning and perceived value. Rather than competing solely on price, brands can use these insights to evaluate whether products are aligned with customer expectations within their respective price segments and optimize pricing strategies accordingly. 

### Inventory Planning
The analysis suggests that products with strong customer engagement metrics are more likely to achieve higher ratings and potentially stronger market performance. Retailers can use these indicators to prioritize inventory allocation, promotional efforts and assortment decisions. Products demonstrating high engagement may warrant additional inventory support, while lower-engagement products can be reviewed for repositioning or inventory reduction.

### Marketing Strategy
Promotional attributes such as exclusive, online-only and limited-edition flags contributed relatively little to the model's predictions. This indicates that long-term customer satisfaction is driven more by product value and customer engagement than by promotional labels alone. As a result, marketing teams may achieve better outcomes by focusing on customer experience, product quality and community engagement rather than relying primarily on promotional tactics.

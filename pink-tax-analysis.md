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
- We predict that this difference occurs because social norms expect women to put more effort into self-maintenance and appearance, which leads women to be more willing to pay more for products related to beauty. This inclines the sellers to increase the price of women’s products.

## Data Summary

## Exploratory Data Analysis
### Distribution of price in each clothing category
![Pink Tax Chart](/images/distribution-of-price.png)
![Pink Tax Chart](/images/density-plot-of-price.png)

While the prices for men and women are both densely distributed below 50 dollars, more women's items are within the lower range. There is also a drastic decrease in the density of female items' price distribution as it approaches 50 dollars, while the dip in male items' distribution is much less apparent, with quite a few of them around 50 to 60 dollars. 

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

From the category analysis, the jeans and blazer categories were inconclusive due to limited sample sizes, likely because some items overlap with the trousers and jackets categories. Among the remaining categories — jackets, shirts, trousers and shoes — shoes were the only category that showed no statistically significant price difference between men’s and women’s products. In contrast, jackets, shirts and trousers all showed statistically significant differences, with men’s items generally having higher price distributions than women’s items. These categories also exhibited greater variance and wider price ranges for men’s products. This suggests that women’s clothing prices were more concentrated within a narrower and generally more affordable price range.

### Overall Comparison
![Pink Tax Chart](/images/mean-price.png)

Overall, men's products had higher mean prices. While the mean prices of women's products were relatively close, men's products exhibited a greater degree of variability in their mean prices.

![Pink Tax Chart](/images/price-range.png)

For jackets, jeans, shirts and trousers, the range of prices was higher for men, while for blazers and shoes, the range of prices was higher for women.

![Pink Tax Chart](/images/number-of-items.png)

It is clear that most clothing categories did not have balanced datasets, making it difficult to draw strong conclusions. As mentioned previously, the jeans and blazers categories contained relatively small sample sizes compared to the other categories, which limits the reliability of the analysis for those groups.

## Discussion and Conclusion
Contrary to the “pink tax” assumption proposed at the beginning of this study, our analysis found that men’s apparel at Zara was often priced higher than comparable women’s items. For example, men’s blazers were, on average, more than $40 more expensive than women’s blazers. Men’s products also showed greater price variability and wider price ranges overall. Some men’s jackets exceeded $190, while no women’s jackets were priced above $130. More specifically, men’s jackets, shirts, trousers and blazers were generally more expensive than similar women’s products. In contrast, women’s items tended to have more concentrated and affordable pricing distributions with fewer extreme values. These findings challenge the assumption that women consistently pay a “pink tax” across clothing categories. However, the imbalance in the dataset across certain clothing categories may also have affected the comparison results and limited the reliability of some conclusions.

Although we initially hypothesized that women’s clothing would be more expensive overall, the results suggest that pricing dynamics are more complex and may be influenced by factors such as production costs, market demand, product positioning and marketing strategies. Further research would be needed to better understand why men’s items demonstrated both higher average prices and greater pricing variability. Overall, this analysis suggests that broad assumptions about uniform gender-based pricing differences should be reconsidered, at least in the context of fast-fashion retailers such as Zara.

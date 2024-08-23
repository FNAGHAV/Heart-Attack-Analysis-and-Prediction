## Project Overview
Heart attacks are a critical health issue, significantly impacting morbidity and mortality rates worldwide. Understanding the distribution and risk factors of heart attacks can improve public health outcomes. This project focuses on analyzing and visualizing the distribution of heart attack cases in the USA in 2022 and identifying key factors influencing their occurrence. Machine learning models are also applied to identify the best-performing model for potential future use as a predictive tool for heart attacks.

The dataset used for this analysis is sourced from Kaggle and was provided by Harrison Lee. This project is a continuation of a group project [https://github.com/hatkiet/Project_4v], where initial versions of the HTML files were developed [https://github.com/hatkiet/Project_4/tree/Fara_branch]. As the analysis, machine learning and design and development of the website were carried out by me 100%, as a group, we decided to present the project in the bootcamp with a visualization that we all contributed to, and this version has been deployed on my personal repository.

This repository includes the final version of the website, designed and developed by me, showcasing the results of my analysis and the performance of the machine learning models.

# Objectives:

1. Data Cleaning: The dataset is cleaned to remove unnecessary columns and rename the remaining ones for better clarity.
2. Visualization: The cleaned dataset is visualized to gain insights and understand data distributions.
3. Machine Learning: Various machine learning models are applied to the dataset to identify the best-performing model.
4. Result Presentation: A website was created to present the results of the analysis and the performance of the machine learning models.

1. Data Cleaning

Handling Missing Values:

The number of NaN values in each column is counted and dropped.
The number of duplicated values in each column is counted and dropped.


2. Data Visualizations

2-2 HeartAttack_Visualization_for_Html_FN.ipynb

Heat Map
A choropleth map is created using Folium to visualize the distribution of heart disease cases across different states in the US. The map is color-coded based on the number of cases and includes a scroll bar for state names and initials. The map is saved as an HTML file.

Bar Graphs for Factors
Bar graphs are created using Plotly to visualize the distribution of various factors (e.g., Sex, Physical Activities, General Health, Sleep Hours, Age Category) among heart attack cases. The graphs are saved as HTML files.

Bar Graphs for Comorbidities
Mean, confidence intervals, chi-square, and p-values were calculated using Spark in Colab. Bar graphs are created using Plotly to visualize the proportion of heart attack cases associated with different comorbidities. The graphs include hover information with statistical details and are color-coded based on the presence or absence of comorbidities.


3. Machine Learning

Due to the imbalanced nature of the data, selective undersampling approaches were taken to tackle the problem.

Selective Undersampling:

The majority class is selectively undersampled to balance the dataset.

Feature importance is calculated using a Random Forest classifier, and Principal Component Analysis (PCA) is applied to reduce the dimensionality of less important features.

Several machine learning models are trained on the balanced dataset, including Logistic Regression, Random Forest, Gradient Boosting, and XGBoost.
Models are evaluated based on accuracy, confusion matrix, and classification report.

Neural Network:

A neural network model is built using TensorFlow and trained on the balanced dataset.
The model is evaluated using accuracy, confusion matrix, and classification report.


4. Result Presentation:

A website was created to present the results of the analysis and the performance of the machine learning models.

# Sections

A.1 Interactive Heatmap

An interactive heatmap embedded in the page shows the distribution of heart attacks across the USA, providing a visual overview of affected regions.

A.2 Factors Influencing Heart Attacks

This section presents various factors that affect the likelihood of experiencing a heart attack. Each factor is represented with an image and a link to an interactive plot that provides more detailed insights:

Sex
General Health
Sleep
Physical Activity
Age

A.3 Comorbidities

The project also explores reciprocal relationships and comorbidities associated with heart attacks. This section identifies health conditions that often occur alongside heart attacks and examines their mutual influences:

Angina
Diabetes
Chronic Obstructive Pulmonary Disease (COPD)
Arthritis
Kidney Disease
Stroke

A.4 Machine Learning Models

The website was created to present the results of the analysis and the performance of the machine learning models.


# Technical Details

A.1 HTML

The HTML structure includes various sections for the introduction, heatmap, factors, comorbidities, and machine learning models. Interactive elements are embedded using <iframe> tags.

A.2 CSS

The CSS file styles the page, ensuring a clean and professional look. Key styles include:

Body and Section Styles: Defines the font, background color, padding, and margins.
Title and Headers: Styles the main title and section headers.
Interactive Elements: Provides hover effects and transitions for images and links.
Grid Layout: Uses CSS Grid to layout the factor and comorbidity sections.

A.3 JavaScript

A simple JavaScript file handles the interactivity of the plots:
Modal Functionality: Functions to show and close interactive plot modals.

A.4 Deployment
The result was deployed on GitHub as a webpage.

# 📚 Module 03: Summary Statistics (एकत्रित सांख्यिकी)

This module covers the mathematical foundations of Central Tendency (Mean, Median, Mode) and Dispersion (Variance, Standard Deviation).

---

## 1. Topic Introduction (विषय ओळख)

### English:
* **What is it?**: Summary statistics are values that summarize and describe the main characteristics of a dataset (e.g., center, spread, and shape).
* **Why was it created?**: To condense large amounts of raw data into a few representative numbers for easy interpretation.
* **Who uses it?**: Data analysts, statisticians, and business intelligence engineers to understand datasets.
* **When should we use it?**: During the Exploratory Data Analysis (EDA) phase of any data science project.

### Marathi (मराठी):
* **हे काय आहे?**: समरी स्टॅटिस्टिक्स (Summary Statistics) म्हणजे अशी मूल्ये जी संपूर्ण डेटासेटची मुख्य वैशिष्ट्ये (जसे की मध्यभाग, विस्तार आणि आकार) थोडक्यात स्पष्ट करतात.
* **हे का तयार केले गेले?**: लाखो ओळींचा कच्चा डेटा (Raw Data) काही महत्त्वाच्या मोजक्या संख्यांमध्ये रूपांतरित करून वाचायला सोपा करण्यासाठी.
* **हे केव्हा वापरावे?**: कोणत्याही डेटा सायन्स प्रोजेक्टच्या सुरुवातीला (Exploratory Data Analysis - EDA दरम्यान).

### Hinglish:
* **What is it?**: Data points ko summarized metrics me represent karne ka tarika hai, jaise overall center kya hai aur data kitna spread (bikhra) hai.
* **When to use?**: EDA ke time data ka initial behavior check karne ke liye.

---

## 2. Importance Score

| Area | Score |
| :--- | :--- |
| **Placement** | 9/10 |
| **Interview** | 9/10 |
| **Industry** | 10/10 |
| **Data Science** | 10/10 |
| **Business Analytics** | 10/10 |
| **Research** | 8/10 |

---

## 3. Mathematical Theory & Derivations

### A. Arithmetic Mean (सरासरी)
The arithmetic mean is the sum of all observations divided by the total number of observations:

$$\mu = \frac{1}{N} \sum_{i=1}^{N} x_i$$

### B. Variance & Standard Deviation (प्रसरण आणि प्रमाण विचलन)
Variance measures the average squared deviation of data points from their mean. Standard deviation is the square root of variance, returning the metric to the original unit:

$$\text{Population Variance} \ (\sigma^2) = \frac{1}{N} \sum_{i=1}^{N} (x_i - \mu)^2$$

$$\text{Sample Variance} \ (s^2) = \frac{1}{n-1} \sum_{i=1}^{n} (x_i - \bar{x})^2$$

> [!NOTE]
> We divide by $n-1$ for sample variance (known as **Bessel's Correction**) to obtain an unbiased estimator of the population variance.

---

## 4. Python Implementation

```python
import numpy as np
import pandas as pd
from scipy import stats

# Generate sample dataset
data = [10, 12, 15, 18, 20, 22, 22, 25, 30, 45]

# Calculate Summary Statistics
mean = np.mean(data)
median = np.median(data)
mode = stats.mode(data, keepdims=True).mode[0]
var_sample = np.var(data, ddof=1) # ddof=1 applies Bessel's Correction
std_sample = np.std(data, ddof=1)

print(f"Mean: {mean}")
print(f"Median: {median}")
print(f"Mode: {mode}")
print(f"Sample Variance: {var_sample}")
print(f"Sample Standard Deviation: {std_sample}")
```

---

## 5. Placement Preparation: FAQs

### Q. What is Bessel's Correction, and why do we divide by $n-1$ instead of $n$ for sample variance?
* **Interviewer's Expectation**: Understands bias in sampling.
* **Fresher Answer**: "We divide by $n-1$ to make sample variance calculations more accurate."
* **Expert Answer**: "When we draw a sample from a population, the sample values tend to be closer to the sample mean than the true population mean. Dividing by $n$ would systematically underestimate the true variance. Dividing by $n-1$ (Bessel's Correction) corrects this bias, making the sample variance an unbiased estimator of the population variance by accounting for the loss of one degree of freedom."

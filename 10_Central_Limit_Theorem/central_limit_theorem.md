# 📚 Module 10: Central Limit Theorem (मध्यवर्ती सीमा सिद्धांत)

This module covers sampling distributions, standard errors, and the convergence of sample means into normal bell curves.

---

## 1. Topic Introduction (विषय ओळख)

### English:
* **What is it?**: The Central Limit Theorem (CLT) states that the sampling distribution of the sample mean will approximate a normal distribution as the sample size becomes large ($n \ge 30$), regardless of the shape of the population distribution.
* **Why was it created?**: It allows us to apply normal distribution theory and parametric tests to non-normal populations.
* **Who uses it?**: Machine learning engineers (hypothesis testing), business analysts (quality control), and pollsters (margin of error).
* **When should we use it?**: Whenever we need to estimate population parameters using sample statistics.

### Marathi (मराठी):
* **हे काय आहे?**: मध्यवर्ती सीमा सिद्धांत (Central Limit Theorem) सांगतो की, मूळ लोकसंख्येचा (Population) आकार कसाही असला (उदा. तिरपा किंवा असमान), तरी जेव्हा सॅम्पलचा आकार मोठा असतो ($n \ge 30$), तेव्हा सॅम्पल सरासरीची (Sample Mean) विभागणी ही नॉर्मल डिस्ट्रीब्युशन (घंटेच्या आकारासारखी) बनते.
* **हे का तयार केले गेले?**: कोणत्याही विषम डेटावर देखील नॉर्मल डिस्ट्रीब्युशनचे नियम आणि गणित वापरता यावे यासाठी.
* **हे केव्हा वापरावे?**: जेव्हा सॅम्पलच्या डेटावरून मूळ लोकसंख्येचा अंदाज लावायचा असतो.

### Hinglish:
* **What is it?**: Agar aap kisi bhi non-normal distribution se bar-bar samples lete hain (having size $n \ge 30$) to un samples ke means ka distribution hamesha ek Normal (bell-shaped) curve banayega.
* **Industry Importance**: A/B testing or hypothesis testing isi theorem par tike hain.

---

## 2. Importance Score

| Area | Score |
| :--- | :--- |
| **Placement** | 10/10 |
| **Interview** | 10/10 |
| **Industry** | 10/10 |
| **Data Science** | 10/10 |
| **Business Analytics** | 9/10 |
| **Research** | 9/10 |

---

## 3. Mathematical Theory & Derivation

Let $X_1, X_2, \dots, X_n$ be a sequence of independent and identically distributed (i.i.d.) random variables drawn from a population with mean $\mu$ and variance $\sigma^2$.

The sample mean is:

$$\bar{X}_n = \frac{X_1 + X_2 + \dots + X_n}{n}$$

As $n \rightarrow \infty$, the distribution of the standardized variable $Z$ converges to the standard normal distribution $N(0, 1)$:

$$Z = \frac{\bar{X}_n - \mu}{\sigma / \sqrt{n}} \xrightarrow{d} N(0, 1)$$

Where $\frac{\sigma}{\sqrt{n}}$ is the **Standard Error (SE)** of the mean (सॅम्पल सरासरीची प्रमाण चूक).

---

## 4. Python Implementation

This script draws samples from a highly skewed Exponential Distribution and demonstrates how the sample means converge to a normal distribution:

```python
import numpy as np
import pandas as pd
import plotly.figure_factory as ff

# Population parameters (Exponential distribution: skewed)
population_size = 100000
scale = 10 # Mean is 10
population = np.random.exponential(scale=scale, size=population_size)

# Draw sample means
sample_size = 40 # n >= 30 rule
num_samples = 1000
sample_means = []

for _ in range(num_samples):
    sample = np.random.choice(population, size=sample_size)
    sample_means.append(np.mean(sample))

# Plot the distribution of sample means using Plotly
fig = ff.create_distrv([sample_means], ['Sample Means'], bin_size=0.2)
fig.update_layout(title_text='CLT Convergence of Skewed Distribution Means')
# fig.show() # Uncomment to show in browser
```

---

## 5. Placement Preparation: FAQs

### Q. What is the difference between Standard Deviation and Standard Error?
* **Interviewer's Expectation**: Clear distinction between variability of raw data vs. precision of sample means.
* **Answer**:
  * **Standard Deviation (SD)**: Measures the spread of individual data points within a single dataset or population.
  * **Standard Error (SE)**: Measures the variability of the sample mean across multiple hypothetical samples. It is calculated by dividing SD by the square root of the sample size: $\text{SE} = \frac{\sigma}{\sqrt{n}}$. As sample size increases, Standard Error decreases (our estimate becomes more precise).

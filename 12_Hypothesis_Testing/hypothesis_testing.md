# 📚 Module 12: Hypothesis Testing (गृहीतक चाचणी)

This module covers formulating Null and Alternative Hypotheses, critical value boundaries, alpha/beta error thresholds, and p-value evaluations.

---

## 1. Topic Introduction (विषय ओळख)

### English:
* **What is it?**: Hypothesis testing is a statistical method used to make decisions and draw inferences about a population parameter based on sample data.
* **Why was it created?**: To determine if an observed effect in sample data is statistically significant or if it occurred purely due to random chance.
* **Who uses it?**: Product managers (A/B testing features), doctors (drug trials efficacy), and marketing directors (campaign performance comparisons).
* **When should we use it?**: Whenever comparing sample groups or testing claims about population metrics.

### Marathi (मराठी):
* **हे काय आहे?**: गृहीतक चाचणी (Hypothesis Testing) ही एक सांख्यिकीय पद्धत आहे ज्याचा वापर सॅम्पलच्या डेटावरून मूळ लोकसंख्येच्या पॅरामीटर्सबाबत निर्णय घेण्यासाठी केला जातो.
* **हे का तयार केले गेले?**: डेटा मधील आढळलेला फरक किंवा बदल खरोखर महत्त्वाचा आहे की तो निव्वळ योगायोगाने (By chance) घडला आहे, हे ठरवण्यासाठी.
* **हे केव्हा वापरावे?**: जेव्हा आपल्याला दोन किंवा अधिक गोष्टींमध्ये तुलना करायची असते किंवा एखादा नवा बदल प्रभावी आहे की नाही हे तपासायचे असते.

### Hinglish:
* **What is it?**: Ye statistical process hai jisse hum prove karte hain ki jo change humne dekha hai wo real hai ya fir random noise (luck) ke karan hai.
* **Industry Importance**: Tech companies (like Amazon, Netflix) har choti feature release ke liye A/B Testing karte hain jo isi par based hai.

---

## 2. Importance Score

| Area | Score |
| :--- | :--- |
| **Placement** | 10/10 |
| **Interview** | 10/10 |
| **Industry** | 10/10 |
| **Data Science** | 10/10 |
| **Business Analytics** | 10/10 |
| **Research** | 10/10 |

---

## 3. Core Terminology & Errors

### A. Hypothesis Formulations
* **Null Hypothesis ($H_0$)**: The status-quo statement assuming no difference, no effect, or no relationship. (सध्याची स्थिती, म्हणजेच कोणताही बदल किंवा फरक नसणे).
* **Alternative Hypothesis ($H_1$ or $H_a$)**: The statement we want to support, assuming there is a significant effect or change. (आपल्याला सिद्ध करायचा असलेला बदल किंवा फरक).

### B. Statistical Errors (चूक प्रकार)
When testing hypotheses, we can make two types of errors: (गृहीतक चाचणी करताना दोन प्रकारच्या चुका होऊ शकतात):

* **Type I Error ($\alpha$)**: Rejecting the Null Hypothesis when it is actually true (False Positive). (सत्य असलेले गृहीतक चुकीचे ठरवून नाकारणे).
* **Type II Error ($\beta$)**: Failing to reject the Null Hypothesis when it is actually false (False Negative). (चुकीचे असलेले गृहीतक बरोबर समजून न नाकारणे).

```text
               True State of the Population
Decision     │   H0 is True      │   H0 is False
─────────────┼───────────────────┼───────────────────
Fail to      │ Correct Decision  │ Type II Error (β)
Reject H0    │ (Probability: 1-α)│ (False Negative)
─────────────┼───────────────────┼───────────────────
Reject H0    │ Type I Error (α)  │ Correct Decision 
             │ (False Positive)  │ (Power: 1-β)
```

---

## 4. Python Implementation (A/B Test)

Comparing click-through rates (CTR) of two website layouts using a two-sample T-test:

```python
import numpy as np
from scipy import stats

# Simulated CTR data for Layout A and Layout B
ctr_a = [0.12, 0.15, 0.11, 0.14, 0.13, 0.16, 0.12, 0.14, 0.11, 0.13]
ctr_b = [0.16, 0.18, 0.15, 0.17, 0.16, 0.19, 0.14, 0.18, 0.15, 0.17]

# Formulate Hypotheses:
# H0: Mean CTR of A = Mean CTR of B
# H1: Mean CTR of A != Mean CTR of B

# Perform Two-Sample Independent T-test
t_stat, p_val = stats.ttest_ind(ctr_a, ctr_b)

print(f"T-statistic: {t_stat:.4f}")
print(f"P-value: {p_val:.6f}")

# Threshold limit (Alpha = 5%)
alpha = 0.05
if p_val < alpha:
    print("Decision: Reject Null Hypothesis (H0). The difference is statistically significant.")
else:
    print("Decision: Fail to reject Null Hypothesis (H0). The difference is due to random chance.")
```

---

## 5. Placement Preparation: FAQs

### Q. What is a p-value? Explain it to a non-technical manager.
* **Interviewer's Expectation**: Clear, intuitive explanation without textbook jargon.
* **Answer**: "A p-value is the probability of obtaining results as extreme as the ones observed, assuming that the Null Hypothesis is true (i.e. assuming there is no real difference). 
  
  For example, if a p-value is 0.02, it means there is only a 2% chance of seeing this difference purely by luck. Since 2% is very low, we conclude that the difference is real and reject the idea that it happened by chance."

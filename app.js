/* 🧠 Advanced Statistics Masterclass: JS Controller & Statistical Simulation Engine */

// ==========================================
// 1. Course Curriculum Database (Levels 1-10)
// ==========================================
const COURSE_DATABASE = {
    1: {
        title: "Level 01: Introduction & Data Types",
        subtitle: "Explore types of statistics and variable categories.",
        topics: [
            {
                title: "Qualitative vs. Quantitative Data (गुणात्मक विरुद्ध संख्यात्मक डेटा)",
                query: "Data Categories:\n1. Nominal (e.g. City Name)\n2. Ordinal (e.g. Feedback Rating)\n3. Interval (e.g. Temperature °C)\n4. Ratio (e.g. Salary - absolute zero exists)",
                en: "Qualitative data represents labels/categories. Quantitative data represents numeric measurements with scale hierarchies (Nominal, Ordinal, Interval, Ratio).",
                mr: "गुणात्मक डेटा म्हणजे नावे किंवा गट (Labels). संख्यात्मक डेटा म्हणजे मोजता येणाऱ्या संख्या, ज्यांचे ४ मुख्य प्रकार आहेत: नॉमिनल, ऑर्डिनल, इंटरव्हल आणि रेशो.",
                hg: "Data do type ke hote hain: Qualitative (jo quality or labels bataye) aur Quantitative (jo numbers or math counts show kare)."
            },
            {
                title: "Descriptive vs. Inferential Statistics (वर्णनात्मक विरुद्ध अनुमानात्मक)",
                query: "Descriptive: Mean, Mode, Standard Deviation\nInferential: T-Test, ANOVA, Confidence Intervals",
                en: "Descriptive statistics summarize data traits. Inferential statistics use sample data to make predictions or claims about a larger population.",
                mr: "वर्णनात्मक सांख्यिकी डेटाचा संक्षिप्त सारांश देते. अनुमानात्मक सांख्यिकी सॅम्पल डेटाचा वापर करून संपूर्ण लोकसंख्येबाबत निष्कर्ष काढते.",
                hg: "Descriptive stats me hum sirf data ko summarize karte hain (jaise average nikalna). Inferential stats me hum sample se population ka predict karte hain."
            }
        ],
        qa: [
            {
                q: "What is the difference between Interval and Ratio scale data?",
                a: "Interval scale has arbitrary zero (e.g., Temperature 0°C does not mean absence of heat). Ratio scale has an absolute true zero point (e.g., Salary $0 means no income, and $100 is twice $50)."
            }
        ]
    },
    2: {
        title: "Level 02: Summary Statistics",
        subtitle: "Master mean, median, mode, variance, and standard deviation.",
        topics: [
            {
                title: "Bessel's Correction (बेसेल दुरुस्ती)",
                query: "Sample Variance (s^2) = Sum( (x - mean)^2 ) / (n - 1)",
                en: "We divide by n-1 instead of n for sample variance to correct the bias of underestimating population variance.",
                mr: "सॅम्पलचे प्रसरण (Variance) मोजताना आपण n ऐवजी n-१ ने भागतो. या दुरुस्तीमुळे सॅम्पलचे प्रसरण मूळ लोकसंख्येच्या प्रसरणाचा अचूक अंदाज देते.",
                hg: "Sample variance calculate karte waqt hum denominator me n-1 lete hain taaki population variance ka unbiased estimate mil sake."
            }
        ],
        qa: [
            {
                q: "Why is Standard Deviation preferred over Variance in reports?",
                a: "Variance is in squared units (e.g., dollars squared), which is hard to interpret. Standard Deviation is the square root of variance, returning the metric to its original unit (e.g., dollars), making it intuitive."
            }
        ]
    },
    3: {
        title: "Level 03: Probability Theory",
        subtitle: "Axioms of probability, combinations, and conditional setups.",
        topics: [
            {
                title: "Permutations vs. Combinations (क्रमपरिवर्तन आणि संयोजन)",
                query: "nPr = n! / (n - r)!\nnCr = n! / (r! * (n - r)!)",
                en: "Permutations are used when order matters (e.g. arrangements). Combinations are used when order does not matter (e.g. team selection).",
                mr: "क्रमपरिवर्तन (Permutation) म्हणजे मांडणीचा क्रम महत्त्वाचा असणे. संयोजन (Combination) म्हणजे निवडीचा क्रम महत्त्वाचा नसणे.",
                hg: "Permutation me items ka order important hota hai (jaise password code). Combination me order se koi farq nahi padta (jaise salad me vegetables select karna)."
            }
        ],
        qa: [
            {
                q: "What are Mutually Exclusive events?",
                a: "Events that cannot happen at the same time. If event A occurs, event B cannot occur (e.g., tossing a coin and getting both Heads and Tails at once is impossible). P(A ∩ B) = 0."
            }
        ]
    },
    4: {
        title: "Level 04: Bayes' Theorem",
        subtitle: "Conditional probability updates and medical diagnostics.",
        topics: [
            {
                title: "Bayesian Update Formula (बेझचे सूत्र)",
                query: "P(A|B) = [ P(B|A) * P(A) ] / P(B)",
                en: "Posterior probability P(A|B) is calculated from Likelihood P(B|A), Prior P(A), and Evidence P(B).",
                mr: "बेझच्या सूत्रानुसार, नवीन पुरावा (B) समोर आल्यावर जुन्या माहितीच्या आधारे आपण नवीन अचूक संभाव्यता मोजू शकतो.",
                hg: "Bayes theorem hume prior probability ko new evidence (likelihood) ke basis par update karke posterior probability nikalna sikhata hai."
            }
        ],
        qa: [
            {
                q: "What is Naive Bayes Classifier in Machine Learning?",
                a: "A classification algorithm based on Bayes' Theorem that assumes 'naive' independence between predictor features (e.g., assuming word occurrences in spam email are independent of each other)."
            }
        ]
    },
    5: {
        title: "Level 05: Central Limit Theorem",
        subtitle: "Normal curve convergence and standard errors.",
        topics: [
            {
                title: "CLT Rule of Thumb (CLT नियम)",
                query: "Standard Error (SE) = s / sqrt(n)",
                en: "As sample size N increases (typically N >= 30), the sampling distribution of sample means becomes normal, centered at the population mean.",
                mr: "जेव्हा सॅम्पलचा आकार वाढतो (n >= ३०), तेव्हा मूळ डेटा कसाही असला, तरी सॅम्पल सरासरीची विभागणी नॉर्मल कर्व्ह (Bell curve) बनते.",
                hg: "Population distribution non-normal ho to bhi, agar sample size N >= 30 hai, to sample means ka distribution normal bell curve ban jayega."
            }
        ],
        qa: [
            {
                q: "What is Standard Error (SE)?",
                a: "Standard Error measures the dispersion of sample means around the true population mean. It is calculated as Standard Deviation divided by the square root of sample size (s / √n)."
            }
        ]
    },
    6: {
        title: "Level 06: Hypothesis Testing",
        subtitle: "Formulate claims, set rejection boundaries, and evaluate p-values.",
        topics: [
            {
                title: "Type I vs. Type II Errors (त्रुटींचे प्रकार)",
                query: "Type I Error (alpha) = False Positive\nType II Error (beta) = False Negative",
                en: "Type I error is rejecting a true null hypothesis. Type II error is failing to reject a false null hypothesis.",
                mr: "टाईप १ त्रुटी (Type I Error) म्हणजे सत्य असलेले गृहीतक नाकारणे. टाईप २ त्रुटी म्हणजे असत्य असलेले गृहीतक स्वीकारणे.",
                hg: "Type I error ka matlab hai jab hum true null hypothesis ko reject kar dete hain (False alarm). Type II error matlab jab hum false null hypothesis ko reject nahi kar paate (Missed warning)."
            }
        ],
        qa: [
            {
                q: "What is a p-value?",
                a: "A p-value is the probability of obtaining results as extreme as observed, assuming the null hypothesis is true. A lower p-value (< 0.05) indicates strong evidence to reject the null hypothesis."
            }
        ]
    },
    7: {
        title: "Level 07: T-Test & ANOVA",
        subtitle: "Compare sample means across two or more groups.",
        topics: [
            {
                title: "One-Sample T-Test (टी-चाचणी)",
                query: "t_stat = (sample_mean - mu) / (std_dev / sqrt(n))",
                en: "Compares a single sample mean to a hypothesized population mean to see if the difference is significant.",
                mr: "सॅम्पलची सरासरी ही ठरवलेल्या गृहीत सरासरीपेक्षा खरोखर वेगळी आहे की नाही हे तपासण्यासाठी ही चाचणी वापरतात.",
                hg: "Single group ke average ko population standard value se compare karne ke liye One-sample T-test use karte hain."
            }
        ],
        qa: [
            {
                q: "When do you use ANOVA instead of a T-test?",
                a: "Use a T-test when comparing means of exactly 2 groups. Use ANOVA (Analysis of Variance) when comparing means of 3 or more groups simultaneously to prevent Type I error inflation."
            }
        ]
    },
    8: {
        title: "Level 08: Correlation & Covariance",
        subtitle: "Analyze strength and direction of linear relationships.",
        topics: [
            {
                title: "Pearson Correlation Coefficient (सहसंबंध)",
                query: "r = Cov(X, Y) / ( std_dev(X) * std_dev(Y) )",
                en: "Measures linear strength between -1 (perfect negative) and +1 (perfect positive). 0 indicates no linear relationship.",
                mr: "दोन चलांमधील रेषीय संबंध मोजतो. याचे मूल्य -१ ते +१ दरम्यान असते, ० म्हणजे कोणताही संबंध नसणे.",
                hg: "Correlation (r) do variables ke linear relationship ki strength aur direction batata hai. Iska range -1 se +1 hota hai."
            }
        ],
        qa: [
            {
                q: "What is the difference between Covariance and Correlation?",
                a: "Covariance indicates the direction of relationship between variables, but its value depends on data units (unbounded scale). Correlation is the standardized version of covariance, bounded between -1 and +1, making it scale-independent."
            }
        ]
    },
    9: {
        title: "Level 09: Outliers & Cleaning",
        subtitle: "Detect anomalies using IQR boundaries and Z-score limits.",
        topics: [
            {
                title: "Interquartile Range (IQR) Rule (आयक्यूआर नियम)",
                query: "IQR = Q3 - Q1\nLower Bound = Q1 - 1.5 * IQR\nUpper Bound = Q3 + 1.5 * IQR",
                en: "Defines normal data boundaries. Any point outside the Lower/Upper bounds is flagged as an outlier.",
                mr: "डेटाच्या तिसऱ्या चतुर्थकाकातून (Q3) पहिले चतुर्थक (Q1) वजा करून IQR मिळतो. त्याच्या १.५ पटीबाहेरील मूल्ये आउटलायर्स ठरतात.",
                hg: "Data ko sort karke Q1 (25th percentile) aur Q3 (75th percentile) nikalte hain. Inke range (IQR) ke 1.5 times ke bahar jo points honge, wo outliers hain."
            }
        ],
        qa: [
            {
                q: "When should we delete outliers vs. keeping them?",
                a: "Delete outliers if they are data entry errors or instrument faults. Keep them if they represent natural variations (like fraud transactions in banking, which are anomalies but important to model)."
            }
        ]
    },
    10: {
        title: "Level 10: Optimization & LP",
        subtitle: "Maximize profit or minimize cost using mathematical solvers.",
        topics: [
            {
                title: "Linear Programming (रेषीय प्रोग्रामिंग)",
                query: "Objective: Maximize Z = c1*x1 + c2*x2\nConstraints: a1*x1 + a2*x2 <= b1",
                en: "Method to find the optimal solution to a problem with linear constraints (e.g. maximizing factory profit with limited raw materials).",
                mr: "मर्यादित संसाधनांचा (Constraints) वापर करून नफा जास्तीत जास्त करण्यासाठी किंवा खर्च कमीत कमी करण्यासाठी वापरली जाणारी गणिती पद्धत.",
                hg: "Limited resources (materials, hours) ke constraints me profit maximize ya cost minimize karne ki linear technique LP hoti hai."
            }
        ],
        qa: [
            {
                q: "What is the Simplex Method?",
                a: "An algorithm used in Linear Programming to solve optimization problems by testing corner point vertices of a feasible region systematically to find the optimal Z value."
            }
        ]
    }
};

// ==========================================
// 2. State Management Variables
// ==========================================
let currentLevel = 1;
let currentLanguage = 'en'; // 'en', 'mr', 'hg'
let currentTab = 'study'; // 'study', 'qa'

// DOM References
const levelTitle = document.getElementById('level-title');
const levelSubtitle = document.getElementById('level-subtitle');
const notesContent = document.getElementById('notes-content');
const langBtn = document.getElementById('lang-btn');
const langIndicator = document.getElementById('lang-indicator');
const themeBtn = document.getElementById('theme-btn');
const tabStudy = document.getElementById('tab-study');
const tabQA = document.getElementById('tab-qa');

// Calculator Elements
const statsInput = document.getElementById('stats-input');
const muInput = document.getElementById('mu-input');
const calcBtn = document.getElementById('calc-btn');
const outMean = document.getElementById('out-mean');
const outMedian = document.getElementById('out-median');
const outMode = document.getElementById('out-mode');
const outVariance = document.getElementById('out-variance');
const outStd = document.getElementById('out-std');
const outTStat = document.getElementById('out-t-stat');
const outTP = document.getElementById('out-t-p');
const outTDecision = document.getElementById('out-t-decision');

// CLT Visualizer Elements
const cltDistribution = document.getElementById('clt-distribution');
const cltSamplesize = document.getElementById('clt-samplesize');
const samplesizeVal = document.getElementById('samplesize-val');
const cltRunBtn = document.getElementById('clt-run-btn');
const cltCanvas = document.getElementById('clt-canvas');

// ==========================================
// 3. Statistical Calculation Utilities
// ==========================================

// Approximate standard normal CDF (precise to 7 decimals)
function normalCDF(z) {
    let t = 1 / (1 + 0.2316419 * Math.abs(z));
    let d = 0.3989423 * Math.exp(-z * z / 2);
    let p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
    if (z > 0) return 1 - p;
    return p;
}

// Compute descriptive summary & runs t-test
function runStatisticalAnalysis() {
    let rawText = statsInput.value.trim();
    if (!rawText) return;

    // Parse array
    let values = rawText.split(',').map(v => parseFloat(v.trim())).filter(v => !isNaN(v));
    if (values.length < 2) {
        alert("Please enter at least 2 valid numbers separated by commas.");
        return;
    }

    let n = values.length;
    
    // 1. Mean
    let mean = values.reduce((sum, v) => sum + v, 0) / n;
    
    // 2. Median
    let sorted = [...values].sort((a,b) => a-b);
    let median = n % 2 !== 0 ? sorted[Math.floor(n/2)] : (sorted[n/2 - 1] + sorted[n/2]) / 2;

    // 3. Mode
    let counts = {};
    let maxCount = 0;
    let mode = sorted[0];
    sorted.forEach(v => {
        counts[v] = (counts[v] || 0) + 1;
        if (counts[v] > maxCount) {
            maxCount = counts[v];
            mode = v;
        }
    });

    // 4. Sample Variance & SD
    let sumSquaredDiff = values.reduce((sum, v) => sum + Math.pow(v - mean, 2), 0);
    let variance = sumSquaredDiff / (n - 1); // Bessel's Correction
    let stdDev = Math.sqrt(variance);

    // Update UI Metrics
    outMean.textContent = mean.toFixed(2);
    outMedian.textContent = median.toFixed(2);
    outMode.textContent = mode.toFixed(2);
    outVariance.textContent = variance.toFixed(2);
    outStd.textContent = stdDev.toFixed(2);

    // 5. One-sample T-test against hypothesized mu
    let hypothesizedMu = parseFloat(muInput.value);
    if (!isNaN(hypothesizedMu) && stdDev > 0) {
        let standardError = stdDev / Math.sqrt(n);
        let tStatistic = (mean - hypothesizedMu) / standardError;
        
        // Two-tailed p-value calculation using normal approximation
        let pValue = 2 * (1 - normalCDF(Math.abs(tStatistic)));

        outTStat.textContent = tStatistic.toFixed(4);
        outTP.textContent = pValue.toFixed(6);

        if (pValue < 0.05) {
            outTDecision.textContent = `Decision: Reject H0 (p < 0.05). The sample mean differs significantly from ${hypothesizedMu}.`;
            outTDecision.className = "decision-text reject";
        } else {
            outTDecision.textContent = `Decision: Fail to reject H0 (p >= 0.05). Difference is due to random chance.`;
            outTDecision.className = "decision-text fail";
        }
    } else {
        outTStat.textContent = "-";
        outTP.textContent = "-";
        outTDecision.textContent = "Cannot run T-Test (Standard Deviation is 0).";
        outTDecision.className = "decision-text";
    }
}

// ==========================================
// 4. Central Limit Theorem Simulator
// ==========================================
function runCLTSimulation() {
    const distType = cltDistribution.value;
    const n = parseInt(cltSamplesize.value, 10);
    const numDraws = 500;
    let sampleMeans = [];

    // Helper random distributions generators
    function drawRandomVal() {
        if (distType === 'exponential') {
            // Skewed Exponential distribution (mean=10)
            return -Math.log(Math.random()) * 10;
        } else if (distType === 'uniform') {
            // Flat Uniform distribution (0 to 100)
            return Math.random() * 100;
        } else {
            // Box-Muller normal distribution transform
            let u1 = Math.random();
            let u2 = Math.random();
            let z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
            return z0 * 15 + 50; // Mean=50, SD=15
        }
    }

    // Draw 500 samples of size n and calculate means
    for (let i = 0; i < numDraws; i++) {
        let sum = 0;
        for (let j = 0; j < n; j++) {
            sum += drawRandomVal();
        }
        sampleMeans.push(sum / n);
    }

    plotHistogram(sampleMeans);
}

// Draw frequency histogram on HTML5 Canvas
function plotHistogram(data) {
    const ctx = cltCanvas.getContext('2d');
    const width = cltCanvas.width;
    const height = cltCanvas.height;
    ctx.clearRect(0, 0, width, height);

    // Calculate statistics for scale
    let min = Math.min(...data);
    let max = Math.max(...data);
    let range = max - min;
    const numBins = 15;
    let bins = new Array(numBins).fill(0);

    if (range === 0) range = 1;

    // Allocate data into bins
    data.forEach(val => {
        let binIdx = Math.floor(((val - min) / range) * numBins);
        if (binIdx >= numBins) binIdx = numBins - 1;
        bins[binIdx]++;
    });

    // Plotting dimensions
    const padding = 20;
    const graphWidth = width - 2 * padding;
    const graphHeight = height - 2 * padding;
    const barWidth = graphWidth / numBins;
    const maxBinVal = Math.max(...bins);

    // Draw bins
    ctx.fillStyle = '#38bdf8'; // Accent Blue
    bins.forEach((count, i) => {
        let barHeight = (count / maxBinVal) * graphHeight;
        let x = padding + i * barWidth;
        let y = height - padding - barHeight;
        
        ctx.fillRect(x + 2, y, barWidth - 4, barHeight);
    });

    // Draw baseline axes
    ctx.strokeStyle = '#2d3748';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();

    // Write min and max labels
    ctx.fillStyle = '#9ca3af';
    ctx.font = '10px sans-serif';
    ctx.fillText(min.toFixed(1), padding, height - 5);
    ctx.fillText(max.toFixed(1), width - padding - 25, height - 5);
}

// ==========================================
// 5. UI Controller Functions
// ==========================================
function loadLevel(levelNum) {
    currentLevel = levelNum;
    const data = COURSE_DATABASE[levelNum];

    levelTitle.textContent = data.title;
    levelSubtitle.textContent = data.subtitle;

    renderContent();
}

function renderContent() {
    const data = COURSE_DATABASE[currentLevel];
    notesContent.innerHTML = '';

    if (currentTab === 'study') {
        data.topics.forEach(topic => {
            const section = document.createElement('div');
            section.className = 'topic-section';

            let htmlContent = `
                <h4>${topic.title}</h4>
                <div class="sql-code-block">${topic.query.replace(/\n/g, '<br>')}</div>
                <div class="explanation-row">
            `;

            if (currentLanguage === 'en' || currentLanguage === 'both') {
                htmlContent += `
                    <div class="lang-box en-box">
                        <h5>English</h5>
                        <p>${topic.en}</p>
                    </div>
                `;
            }
            if (currentLanguage === 'mr' || currentLanguage === 'both') {
                htmlContent += `
                    <div class="lang-box mr-box">
                        <h5>मराठी</h5>
                        <p>${topic.mr}</p>
                    </div>
                `;
            }
            if (currentLanguage === 'hg' || currentLanguage === 'both') {
                htmlContent += `
                    <div class="lang-box hg-box">
                        <h5>Hinglish</h5>
                        <p>${topic.hg}</p>
                    </div>
                `;
            }

            htmlContent += `</div>`;
            section.innerHTML = htmlContent;

            notesContent.appendChild(section);
        });
    } else {
        data.qa.forEach((item, index) => {
            const qaItem = document.createElement('div');
            qaItem.className = 'qa-item';
            qaItem.innerHTML = `
                <div class="qa-question">
                    <span>Q${index+1}: ${item.q}</span>
                    <i class="fa-solid fa-chevron-down"></i>
                </div>
                <div class="qa-answer">
                    <p>${item.a}</p>
                </div>
            `;

            qaItem.querySelector('.qa-question').addEventListener('click', () => {
                const answer = qaItem.querySelector('.qa-answer');
                const icon = qaItem.querySelector('.qa-question i');
                if (answer.style.display === 'block') {
                    answer.style.display = 'none';
                    icon.className = 'fa-solid fa-chevron-down';
                } else {
                    answer.style.display = 'block';
                    icon.className = 'fa-solid fa-chevron-up';
                }
            });

            notesContent.appendChild(qaItem);
        });
    }
}

// ==========================================
// 6. Event Listeners Setup
// ==========================================

// Sidebar Level Switcher
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        const lvl = parseInt(item.getAttribute('data-level'), 10);
        loadLevel(lvl);
    });
});

// Calculator triggers
calcBtn.addEventListener('click', runStatisticalAnalysis);

// CLT simulation slider update
cltSamplesize.addEventListener('input', () => {
    samplesizeVal.textContent = cltSamplesize.value;
});

cltRunBtn.addEventListener('click', runCLTSimulation);

// Language Cycle Toggle (English -> Marathi -> Hinglish -> Show All)
langBtn.addEventListener('click', () => {
    if (currentLanguage === 'en') {
        currentLanguage = 'mr';
        langIndicator.textContent = "Language: Marathi";
    } else if (currentLanguage === 'mr') {
        currentLanguage = 'hg';
        langIndicator.textContent = "Language: Hinglish";
    } else if (currentLanguage === 'hg') {
        currentLanguage = 'both';
        langIndicator.textContent = "Language: Show All";
    } else {
        currentLanguage = 'en';
        langIndicator.textContent = "Language: English";
    }
    renderContent();
});

// Theme Switcher
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const icon = themeBtn.querySelector('i');
    if (document.body.classList.contains('light-mode')) {
        icon.className = 'fa-solid fa-sun';
    } else {
        icon.className = 'fa-solid fa-moon';
    }
});

// Tabs switchers
tabStudy.addEventListener('click', () => {
    tabStudy.classList.add('active');
    tabQA.classList.remove('active');
    currentTab = 'study';
    renderContent();
});

tabQA.addEventListener('click', () => {
    tabQA.classList.add('active');
    tabStudy.classList.remove('active');
    currentTab = 'qa';
    renderContent();
});

// Initial startup run
loadLevel(1);
runStatisticalAnalysis();
runCLTSimulation();

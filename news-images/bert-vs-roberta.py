import matplotlib.pyplot as plt
import numpy as np

# 數據來自 classification-of-news-headline.md 的 BERT Variant Model Accuracies 表格
categories = ["Unprocessed Title", "Processed Title"]
bert = [79.11, 75.43]
roberta = [90.54, 77.40]

x = np.arange(len(categories))
width = 0.35

fig, ax = plt.subplots(figsize=(8, 5))
ax.bar(x - width/2, bert, width, label="BERT", color="#bb6c43")       # 鏽橘 = 網站主色
ax.bar(x + width/2, roberta, width, label="RoBERTa", color="#1467a0")  # 深藍 = 對色盲友善的對比色

ax.set_ylabel("Accuracy (%)")
ax.set_title("BERT vs. RoBERTa Accuracy")
ax.set_xticks(x)
ax.set_xticklabels(categories)
ax.set_ylim(0, 100)
ax.legend()

# 在每根柱子上方標數字
for bars in ax.containers:
    ax.bar_label(bars, fmt="%.1f", padding=3)

plt.tight_layout()
plt.savefig("bert-vs-roberta.png", dpi=150)

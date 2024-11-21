# Voter FAQs about elections from all around the world.
This is a repository containing frequent asked questions (FAQs) by potential voters about elections in their regions. It covers countries around the work as well as the US states. Collectively called the 'Election Dataset', it can be used to conduct research in AI methods to provide accurate and easyily understandable information to voters that they care about.  

## Global dataset and code
This data was collected by seeking common questions in leading democracies and then generalizing them systematically using configurable patterns. See technical documentation.
1. [`code`](https://github.com/ai4society/election-dataset/tree/main/code) folder contains a python notebook for data analysis.
2. [`data`](https://github.com/ai4society/election-dataset/tree/main/data) folder contains the _csv_ data files with election QA data. The queries can also be found in a spreadsheet here: https://rb.gy/nv9rs3
3. [`docs`](https://github.com/ai4society/election-dataset/tree/main/docs) folder contains the paper accepted at AAAI 2024 AI4CE workshop titled '[A Dataset of Generalizable Election-Related Questions for AI Tools Compiled from Leading Global Democracies](https://github.com/ai4society/election-dataset/blob/main/docs/WorkshopPaper_AI4CE_AAAI2024.pdf)'. It also contains a file called 'DataChangeLog.md' that contains information about the updates made to the datasets in the repository. The [slides](https://github.com/ai4society/election-dataset/blob/main/docs/GeneralizableElectionQs_AI4CE2024AAAI.pdf) presented at the AAAI AI4CE 2024 workshop can also found in the same folder.

## Citation

If you find this work useful, please cite:

```
@inproceedings{lakkaraju2024dataset,
  title={A Dataset of Generalizable Election-Related Questions for AI Tools Compiled from Leading Global Democracies},
  author={Kausik Lakkaraju and Sara Elizabeth Jones and Bharath Muppasani and Biplav Srivastava},
  booktitle={AAAI 2024 Workshop on AI and Credible Elections},
  year={2024}
}
```

## US dataset and code
This data was collected by looking for data at each US state's election commission website(s). Further, we augmented it with data from [Vote411](https://www.vote411.org/) managed by League for Women Voters (LWV), a non-profit. See technical documentation.
1. [`code-us`](https://github.com/ai4society/election-dataset/tree/main/code-us) folder contains code to work with data in data-us sub-folder.
2. [`data-us`](https://github.com/ai4society/election-dataset/tree/main/data-us) folder contains data in .json format.


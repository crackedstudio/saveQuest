# SaveQuest — Decentralized Group Savings with DeFi Yields

## Inspiration  
In Africa and other emerging markets, communities rely on informal savings systems like *ajo* and *esusu* to meet financial goals.  
These systems work through trust but suffer from idle funds, manual record-keeping, and fraud risks.  

We built **SaveQuest** to merge the **trust of group savings** with the **automation and yield power of DeFi** — bringing transparency, safety, and growth to community finance.

---

## What We Built  
**SaveQuest** is an onchain savings protocol on **Starknet** where members deposit **stablecoins or wrapped BTC** into shared pools.  
Funds are deployed into **yield-generating vaults**, and the **yield is rotated monthly** among members, while the **principal remains untouched**.  

\[
\text{Monthly Yield Share: } Y_t = \frac{r_t \times P}{N}
\]

- **Blockchain:** Starknet (Ethereum L2)  
- **Assets:** USDT, USDC, wBTC  
- **Model:** Group savings + yield vaults = monthly rewards  

---

## How We Built It  
We designed smart contracts in **Cairo** to handle deposits, rotations, and yield distribution.  
An **Express.js backend** listens for contract events and automates pool updates.  
The planned frontend is a **React Native + native-wind** app for mobile users to create and join pools seamlessly.

---

## What We Learned  
- How to blend **social finance** and **DeFi**  
- Building scalable group logic on **Starknet**  
- Designing **transparent yield mechanisms** for real users  

---

## Challenges  
- Yield distribution fairness  
- Cairo gas optimization  
- UX design for non-crypto users  

---

## Vision  
**SaveQuest** makes collective savings smarter — turning community trust into automated, yield-earning digital finance.



| **Factor**               | **Individual Farming**                                        | **SaveQuest Pooling**                                       |
| ------------------------ | ------------------------------------------------------------- | ----------------------------------------------------------- |
| **Capital Efficiency**   | Small deposit = low yield, high relative gas fees             | Large pooled deposit maximizes yield & minimizes costs      |
| **User Experience**      | Complex: must pick farms, harvest manually, pay gas each time | Simple: one-click deposit, auto-harvest, no manual strategy |
| **Engagement**           | Boring — passive interest accrual                             | Fun — random monthly “winner,” gamified saving              |
| **Accessibility**        | Requires technical knowledge, risk assessment                 | Abstracted away — just join a pool                          |
| **Financial Discipline** | Easy to withdraw early                                        | Locked-in commitment helps enforce saving                   |
| **Transparency**         | Harder to verify yield distribution                           | Fully on-chain, verifiable selection & accounting           |

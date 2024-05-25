# MLH-CodeSamples
Code samples for MLH Fellowship 2020.

This repo contains two projects. Remittance App and Verify App.

Details on each of them is given below.

# RemittanceApp

Working on a proof of concept of the cross border currency exchange use case on the Hyperledger Fabric platform. This app demonstrates the frontend of the app using AngularJS v1.6.9 and the logic flow using MongoDB.

## Prerequisite

Install [NodeJS](https://nodejs.org) on your machine. I have used the node v10.9.0 . Using npm download the mongodb, cors and express packages.
```bash
npm install express
npm install mongodb
npm install cors
```

Install [MongoDB](https://www.mongodb.org) on your system or use the cloud version , [Mongo Atlas](https://www.mongodb.com/cloud/atlas) .


## Implementation

The app has four pages:

- Login Page : Lets a user access his account
- Profile Page : Shows basic details of the user like name, balance, Home Branch, IFSC.
- Beneficiary Page: This where you select who to send money to.
- Transact Page: Sending desired amount of money to the beneficiary.





# VerifyApp

A decentralised way of storing evidences on IPFS and verifying it's authenticity using blockchain. A javascript implementation of blockchain has been used in this proof of concept.

## Prerequisite

Install [IPFS](https://ipfs.io) on your local machine. I have used the go-ipfs implementation. Follow the steps [here](https://docs-beta.ipfs.io/how-to/command-line-quick-start/#install-ipfs) to check successful installation.

## Implementation

A javascript implementation of the blockchain has been used to demonstrate the behavious of the decentralised netwok. This app can be used to add evidences to IPFS and save the file hashes to blockchain. This app can retrieve ipfs hashes which when compared with file hash to prove its authenticity.

App uses a parameter Case ID to uniquely identify cases and to retrieve the corresponding hashes.


## Getting Started

Clone the app
```bash
https://github.com/siddharth2798/VerifyApp.git
```

Run the ipfs daemon

```bash
ipfs daemon
```


## Usage

- Open index.html as localhost in your browser
- Enter a Case ID
- Upload a file and generate hash for it
- Once hash is generated, Add file to the chain
Note: Clear chain is for deleting all the data in the blockchain

- Open check.html as localhost in your browser
- Enter Case ID to search for
- Upload the file that you want to check for and generate it's hash
- Verify the document

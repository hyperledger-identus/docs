"use strict";(self.webpackChunkidentus_documentation_portal=self.webpackChunkidentus_documentation_portal||[]).push([[1487],{75338:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=t(74848),s=t(28453);const r={},o="What will u learn in this tutorial?",i={id:"cardano/IssuerDID",title:"IssuerDID",description:"Issuer DID Tutorial",source:"@site/identus-edge-agent-sdk-ts/docs/cardano/IssuerDID.md",sourceDirName:"cardano",slug:"/cardano/IssuerDID",permalink:"/identus-docs/identus-edge-agent-sdk-ts/cardano/IssuerDID",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Pre requisites",id:"pre-requisites",level:2},{value:"Getting started",id:"getting-started",level:2}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{align:"center",children:[(0,a.jsx)("a",{href:"https://www.hyperledger.org/projects/identus",children:(0,a.jsx)("img",{src:"https://cdn.jsdelivr.net/gh/hyperledger/identus@v2.13/resources/images/hyperledger-identus.svg",alt:"identus-logo",width:"513px",height:"99px"})}),(0,a.jsxs)("i",{children:[" ",(0,a.jsx)("font",{size:"18",children:"Issuer DID Tutorial"})," "]})]}),"\n",(0,a.jsx)(e.h1,{id:"what-will-u-learn-in-this-tutorial",children:"What will u learn in this tutorial?"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["Integrating the ",(0,a.jsx)(e.a,{href:"https://cips.cardano.org/cip/CIP-30",children:"CIP-30"})," Protol to interact with existing Cardano Web Wallets in Browsers extensions."]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["Create an internal transaction metadata using ",(0,a.jsx)(e.a,{href:"https://github.com/Emurgo/cardano-serialization-lib/tree/master",children:"Cardano serialisation lib"})]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"Submit the Transaction on Cardano"}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["Resolve the DID we just created using the ",(0,a.jsx)(e.a,{href:"https://neoprism.patlo.dev/resolver",children:"Prism resolver"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"pre-requisites",children:"Pre requisites"}),"\n",(0,a.jsx)(e.p,{children:"This tutorial is developed using React application and nextJS + Typescript."}),"\n",(0,a.jsxs)(e.p,{children:["You will need to create a ",(0,a.jsx)(e.a,{href:"https://blockfrost.io/dashboard",children:"blockfrost"})," API token and a project."]}),"\n",(0,a.jsx)(e.p,{children:"Install the following packages into your project"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"npm i @hyperledger/identus-edge-agent-sdk -S\nnpm i @cardano-sdk/dapp-connector -S\nnpm i @emurgo/cardano-serialization-lib-browser -S\n"})}),"\n",(0,a.jsx)(e.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,a.jsx)(e.p,{children:"First configure your environmnet, create a .env.local file in the app directory and add:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"NEXT_PUBLIC_BLOCKFROST_API_KEY=[[ your blockfrost api key]]\n"})}),"\n",(0,a.jsxs)(e.p,{children:["You can see this in realtime working in our ",(0,a.jsx)(e.a,{href:"https://github.com/hyperledger/identus-edge-agent-sdk-ts/tree/main/demos/next",children:"next js demo"})," follow the required steps in the README.md file."]}),"\n",(0,a.jsx)(e.p,{children:'Once you load the website using the menu, click "DIDS". You will be able to select the Wallet of your choice to create the Cardano transaction for a published did. You can do by following the UI/UX steps or by checking the following example source-code:'}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-typescript",children:'import React, { useEffect, useState } from "react";\nimport SDK from "@hyperledger/identus-edge-agent-sdk";\nimport \'../app/index.css\'\nimport { PageHeader } from "@/components/PageHeader";\nimport { Cip30Wallet, Cip30WalletApiWithPossibleExtensions } from \'@cardano-sdk/dapp-connector\';\nimport { TransactionUnspentOutput as TransactionUnspentOutputType } from "@emurgo/cardano-serialization-lib-browser";\n\nlet instance: typeof import("@emurgo/cardano-serialization-lib-browser");\n\nasync function loadSerialization() {\n    instance ??= await import("@emurgo/cardano-serialization-lib-browser");\n    return instance\n}\n\nasync function fetchNetworkParams() {\n    const response = await fetch(\n        "https://cardano-mainnet.blockfrost.io/api/v0/epochs/latest/parameters",\n        {\n            headers: {\n                project_id: process.env.NEXT_PUBLIC_BLOCKFROST_API_KEY!,\n            },\n        }\n    );\n    if (!response.ok) {\n        throw new Error(`HTTP error! status: ${response.status}`);\n    }\n    const data = await response.json();\n    return {\n        linearFee: {\n            minFeeA: data.min_fee_a.toString(),\n            minFeeB: data.min_fee_b.toString(),\n        },\n        poolDeposit: data.pool_deposit,\n        keyDeposit: data.key_deposit,\n        coinsPerUtxoWord: data.coins_per_utxo_word,\n        maxValSize: data.max_val_size,\n        priceMem: data.price_mem,\n        priceStep: data.price_step,\n        maxTxSize: parseInt(data.max_tx_size),\n    };\n}\n\nasync function getUtxos(API: Cip30WalletApiWithPossibleExtensions) {\n    const {\n        TransactionUnspentOutput\n    } = await loadSerialization();\n    const utxosHex = await API.getUtxos("10", {\n        page: 1,\n        limit: 100\n    }) ?? [];\n    const validUtxos = utxosHex\n        .map((hex) => {\n            if (!hex) return null;\n            try {\n                return TransactionUnspentOutput.from_bytes(\n                    Uint8Array.from(Buffer.from(hex, \'hex\'))\n                );\n            } catch (error) {\n                console.error(\'Error parsing UTXO:\', error);\n                return null;\n            }\n        })\n        .filter((utxo): utxo is TransactionUnspentOutputType => utxo !== null);\n    return validUtxos;\n}\n\nasync function fetchCurrentSlot() {\n    const response = await fetch(\n        "https://cardano-mainnet.blockfrost.io/api/v0/blocks/latest",\n        {\n            headers: {\n                project_id: process.env.NEXT_PUBLIC_BLOCKFROST_API_KEY!,\n            },\n        }\n    );\n    if (!response.ok) {\n        throw new Error(`Failed to fetch current slot: ${response.status}`);\n    }\n    const data = await response.json();\n    console.log(\'Current slot:\', data.slot);\n    return data.slot; // Use the `slot` field from the API response\n}\n\nasync function buildTransactionHex(\n    API: Cip30WalletApiWithPossibleExtensions,\n    operation: any\n): Promise<string> {\n    const {\n        TransactionBuilder,\n        TransactionBuilderConfigBuilder,\n        Address,\n        LinearFee,\n        BigNum,\n        encode_json_str_to_metadatum,\n        MetadataJsonSchema,\n        GeneralTransactionMetadata,\n        TransactionUnspentOutputs,\n        CoinSelectionStrategyCIP2,\n        TransactionWitnessSet,\n        Transaction\n    } = await loadSerialization();\n    const protocolParams = await fetchNetworkParams();\n    const currentSlot = await fetchCurrentSlot();\n    const ttl = currentSlot + 3600; // Current time + 1 hour  \n    const changeAddressHex = await API.getChangeAddress();\n    const changeAddress = Address.from_bytes(\n        Uint8Array.from(\n            Buffer.from(changeAddressHex, \'hex\')\n        )\n    );\n    const txBuilderConfig = TransactionBuilderConfigBuilder.new()\n        .coins_per_utxo_byte(BigNum.from_str(protocolParams.coinsPerUtxoWord))\n        .fee_algo(\n            LinearFee.new(\n                BigNum.from_str(protocolParams.linearFee.minFeeA),\n                BigNum.from_str(protocolParams.linearFee.minFeeB)\n            )\n        )\n        .pool_deposit(BigNum.from_str(protocolParams.poolDeposit))\n        .key_deposit(BigNum.from_str(protocolParams.keyDeposit))\n        .max_value_size(protocolParams.maxValSize)\n        .max_tx_size(protocolParams.maxTxSize)\n        .prefer_pure_change(true)\n        .build();\n    const txBuilder = TransactionBuilder.new(txBuilderConfig);\n    txBuilder.set_ttl(ttl);\n    const utxos = await getUtxos(API);\n    const txInputs = TransactionUnspentOutputs.new();\n    utxos.forEach((utxo) => {\n        txInputs.add(utxo)\n    });\n    txBuilder.add_inputs_from(txInputs, CoinSelectionStrategyCIP2.LargestFirstMultiAsset);\n    const metadataId = BigNum.from_str(\'21325\');\n    const metadatum = encode_json_str_to_metadatum(\n        JSON.stringify(operation),\n        MetadataJsonSchema.NoConversions\n    );\n    const metadata = GeneralTransactionMetadata.new();\n    metadata.insert(metadataId, metadatum);\n    txBuilder.set_metadata(metadata);\n    txBuilder.add_change_if_needed(changeAddress);\n    const transaction = txBuilder.build_tx();\n    const txBody = transaction.body();\n    const txHex = transaction.to_hex();\n    const witnessSetHex = await API.signTx(txHex, true);\n    const witnessSet = TransactionWitnessSet.from_bytes(\n        Uint8Array.from(\n            Buffer.from(witnessSetHex, \'hex\')\n        )\n    );\n    const auxiliaryData = transaction.auxiliary_data();\n    const signedTransaction = Transaction.new(\n        txBody,\n        witnessSet,\n        auxiliaryData\n    );\n    const signedTxHex = Buffer.from(signedTransaction.to_bytes()).toString(\'hex\');\n    return signedTxHex;\n}\n\nconst Agent: React.FC<{}> = props => {\n    const [walletState, setWalletState] = useState<any>({\n        wallets: [] as Array<{ key: string; name: string; icon: string; api: Cip30Wallet }>,\n        whichWalletSelected: \'\'\n    });\n    const [error] = React.useState<any>();\n    const [masterKey, setMasterKey] = useState<SDK.Domain.PrivateKey>();\n    const [publishStatus, setPublishStatus] = useState<{\n        status: \'idle\' | \'publishing\' | \'confirming\' | \'completed\' | \'error\';\n        message?: string;\n        txHash?: string;\n    }>({ status: \'idle\' });\n\n    useEffect(() => {\n        let timeout;\n        const pollWallets = (count = 0) => {\n            const wallets: any[] = [];\n            if ((window as any).cardano) {\n                for (const key in (window as any).cardano) {\n                    const walletApi = (window as any).cardano[key];\n                    if (walletApi && walletApi.enable && wallets.findIndex(w => w.key === key) === -1) {\n                        wallets.push({\n                            key,\n                            name: walletApi.name || key,\n                            icon: walletApi.icon,\n                            api: walletApi\n                        });\n                    }\n                }\n            }\n            if (wallets.length === 0 && count < 3) {\n                timeout = setTimeout(() => {\n                    pollWallets(count + 1);\n                }, 1000);\n                return;\n            }\n            setWalletState({\n                wallets,\n                whichWalletSelected: \'\'\n            });\n        };\n\n        pollWallets();\n\n        return () => {\n            if (timeout) {\n                clearTimeout(timeout);\n                timeout = undefined;\n            }\n        };\n    }, []);\n\n    function onCreateMasterKey() {\n        const apollo = new SDK.Apollo();\n        const masterSK = apollo.createPrivateKey({\n            type: SDK.Domain.KeyTypes.EC,\n            curve: SDK.Domain.Curve.SECP256K1,\n            seed: Buffer.from(apollo.createRandomSeed().seed.value).toString("hex"),\n        });\n        setMasterKey(masterSK);\n    }\n\n    async function checkTransactionConfirmation(txHash: string) {\n        try {\n            const response = await fetch(\n                `https://cardano-mainnet.blockfrost.io/api/v0/txs/${txHash}`,\n                {\n                    headers: {\n                        project_id: process.env.NEXT_PUBLIC_BLOCKFROST_API_KEY!,\n                    },\n                }\n            );\n            return response.ok;\n        } catch (error) {\n            return false;\n        }\n    }\n\n    async function onConnectWallet(masterKey: SDK.Domain.PrivateKey) {\n        const selectedWallet = walletState.wallets.find(wallet => wallet.key === walletState.whichWalletSelected);\n        if (selectedWallet) {\n            try {\n                setPublishStatus({ status: \'publishing\', message: \'Creating DID operation...\' });\n                const apollo = new SDK.Apollo();\n                const castor = new SDK.Castor(apollo);\n                const walletInstance: Cip30Wallet = selectedWallet.api;\n                const API = await walletInstance.enable();\n\n                const { metadataBody, did } = await castor.createOperation(masterKey);\n                console.log(\'Transaction DID:\', did.toString());\n\n                setPublishStatus({ status: \'publishing\', message: \'Building and signing transaction...\' });\n                const signedTxHex = await buildTransactionHex(API, metadataBody);\n\n                setPublishStatus({ status: \'publishing\', message: \'Submitting transaction...\' });\n                const txHash = await API.submitTx(signedTxHex);\n\n                setPublishStatus({\n                    status: \'confirming\',\n                    message: \'Transaction submitted. Waiting for confirmation...\',\n                    txHash\n                });\n\n                // Poll for transaction confirmation\n                const checkConfirmation = async () => {\n                    const isConfirmed = await checkTransactionConfirmation(txHash);\n                    if (isConfirmed) {\n                        setPublishStatus({\n                            status: \'completed\',\n                            message: \'DID successfully published!\',\n                            txHash\n                        });\n                    } else {\n                        await new Promise<void>((resolve) => {\n                            setTimeout(async () => {\n                                await checkConfirmation()\n                                resolve();\n                            }, 15000)\n                        })\n                    }\n                };\n\n                await new Promise<void>((resolve) => {\n                    setTimeout(async () => {\n                        await checkConfirmation()\n                        resolve();\n                    }, 15000)\n                })\n\n\n            } catch (error) {\n                console.error(\'Error during transaction:\', error);\n                setPublishStatus({\n                    status: \'error\',\n                    message: error instanceof Error ? error.message : \'Unknown error occurred\'\n                });\n            }\n        } else {\n            alert(\'Please select a wallet\');\n        }\n    }\n\n    return (\n        <>\n            <div className="mx-10 mt-5 mb-30">\n                <PageHeader>\n                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">\n                        Edge Agent\n                    </h1>\n                </PageHeader>\n                <div\n                    className="w-full mt-5 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-900 "\n                >\n                    <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900  dark:text-white">\n                        Create and Publish Prism DID\n                    </h2>\n                    <p className="text-xl font-semibold mb-4">Select a wallet:</p>\n                    {walletState.wallets && walletState.wallets.length > 0 ? (\n                        <div className="flex flex-wrap">\n                            {walletState.wallets.map(wallet => (\n                                <div\n                                    key={wallet.key}\n                                    className={`p-4 m-2  rounded cursor-pointer flex items-center w-48 hover:bg-gray-900 ${wallet.key === walletState.whichWalletSelected ? \' bg-gray-900\' : \'\'}`}\n                                    onClick={() => setWalletState({ ...walletState, whichWalletSelected: wallet.key })}\n                                >\n                                    {wallet.icon && (\n                                        <img src={wallet.icon} alt={`${wallet.name} icon`} className="h-8 w-8 mr-2" />\n                                    )}\n                                    <p className="text-lg font-medium">{wallet.name}</p>\n                                </div>\n                            ))}\n                        </div>\n                    ) : (\n                        <p>No wallets found. Please install a Cardano wallet extension.</p>\n                    )}\n\n                    <div className="mt-8">\n                        <p className="text-xl font-semibold mb-2">Create your Prism DID master key</p>\n                        <button\n                            className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"\n                            onClick={onCreateMasterKey}\n                        >\n                            Create Master Key\n                        </button>\n                        {masterKey && <p className="mt-4">Master key created: {masterKey.to.String("hex")}</p>}\n                    </div>\n                    {walletState.whichWalletSelected && masterKey && (\n                        <button\n                            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"\n                            onClick={() => onConnectWallet(masterKey)}\n                        >\n                            Publish Prism DID\n                        </button>\n                    )}\n                    {error instanceof Error && (\n                        <pre className="text-red-500">\n                            Error: {error.message}\n                        </pre>\n                    )}\n                    {publishStatus.status !== \'idle\' && (\n                        <div className="mt-4 p-4 rounded">\n                            {publishStatus.status === \'publishing\' && (\n                                <div className="flex items-center text-yellow-500">\n                                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">\n                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />\n                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />\n                                    </svg>\n                                    {publishStatus.message}\n                                </div>\n                            )}\n                            {publishStatus.status === \'confirming\' && (\n                                <div className="flex items-center text-blue-500">\n                                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">\n                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />\n                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />\n                                    </svg>\n                                    {publishStatus.message}\n                                    <a\n                                        href={`https://cardanoscan.io/transaction/${publishStatus.txHash}`}\n                                        target="_blank"\n                                        rel="noopener noreferrer"\n                                        className="ml-2 text-blue-500 hover:text-blue-700 underline"\n                                    >\n                                        View transaction\n                                    </a>\n                                </div>\n                            )}\n                            {publishStatus.status === \'completed\' && (\n                                <div className="text-green-500">\n                                    \u2713 {publishStatus.message}\n                                    <a\n                                        href={`https://cardanoscan.io/transaction/${publishStatus.txHash}`}\n                                        target="_blank"\n                                        rel="noopener noreferrer"\n                                        className="ml-2 text-blue-500 hover:text-blue-700 underline"\n                                    >\n                                        View transaction\n                                    </a>\n                                </div>\n                            )}\n                            {publishStatus.status === \'error\' && (\n                                <div className="text-red-500">\n                                    \u2717 {publishStatus.message}\n                                </div>\n                            )}\n                        </div>\n                    )}\n                </div>\n            </div>\n        </>\n    );\n};\n\nexport default Agent;\n'})})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>i});var a=t(96540);const s={},r=a.createContext(s);function o(n){const e=a.useContext(r);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),a.createElement(r.Provider,{value:e},n.children)}}}]);
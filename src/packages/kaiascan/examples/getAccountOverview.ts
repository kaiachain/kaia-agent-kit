export const getAccountOverviewExamples = [
    [
        {
            user: "{{user1}}",
            content: {
                text: "Tell me about my account.",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Which account address would you like to check? Also, please provide the network.",
            },
        },
        {
            user: "{{user1}}",
            content: {
                text: "0x840e00ffc46734c3ac97b0e88b1589f83b3874ec",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Noted, since you didn't provide the network, I'll assume it's kaia mainnet. Let me fetch the details for 0x840e00ffc46734c3ac97b0e88b1589f83b3874ec.",
                action: "get_account_overview",
            },
        }
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Can you give me an overview of my account?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Sure, which account address would you like to check?",
            },
        },
        {
            user: "{{user1}}",
            content: {
                text: "0x840e00ffc46734c3ac97b0e88b1589f83b3874ec",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Let me fetch the details for 0x840e00ffc46734c3ac97b0e88b1589f83b3874ec on kaia mainnet.",
                action: "get_account_overview",
            },
        }
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "What's the overview of 0x840e00ffc46734c3ac97b0e88b1589f83b3874ec on kairos?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll get the account details for 0x840e00ffc46734c3ac97b0e88b1589f83b3874ec on kairos network.",
                action: "get_account_overview",
            },
        }
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Can you show me the details of my portfolio?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Which account address would you like to check?",
            },
        },
        {
            user: "{{user1}}",
            content: {
                text: "0x840e00ffc46734c3ac97b0e88b1589f83b3874ec on kairos network.",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Fetching the portfolio details for 0x840e00ffc46734c3ac97b0e88b1589f83b3874ec on kairos network.",
                action: "get_account_overview",
            },
        }
    ],
];
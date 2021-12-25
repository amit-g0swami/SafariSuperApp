// intitialMessages property in this config file is put into 
// the chatbot's internal state in a property called messages

import React from 'react'
import {createChatBotMessage} from 'react-chatbot-kit';
import LearningOptions from './LearningOptions';
import LinkList from './LinkList';

const config = {
    botName: "Help-Bot",
    initialMessages: [
        createChatBotMessage("Hi User. What do you want to learn?",
        {
            widget: "DSA",
        })
    ],
    customStyles:{
        botMessageBox: {
            backgroundColor: "rgb(48, 63, 159)",
        },
        chatButton: {
            backgroundColor: "rgb(48, 63, 159)"
        },
    },
    widgets: [
        {
            widgetName: "DSA",
            widgetFunc: (props) => <LearningOptions {...props} />
        },
        {
            widgetName: "Chess",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Chess",
                        url: "https://www.chess.com/",
                        id: 1,
                    },

                ],
            },
        },
        {
            widgetName: "DSA",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "DSA",
                        url: "https://a2oj.com/Ladders.html",
                        id: 2,
                    },

                ],
            },
        },
    ],
};

export default config
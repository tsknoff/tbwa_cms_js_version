import React from 'react';
import {useEffect} from "@types/react";
import axios from "axios";

const TestRequest = () => {
    useEffect(() => {
        axios.get('https://tsknoff.ru/cms_test/tbwa/cms/handler.php', {
            params: {
                token: "token",
                method: "getPages"
            }
        })
            .then(function (response) {
                //setChatList(response.data)
                console.log(response.data);

            })
            .catch(function (error) {
                //setChatList(['Unable to reach the server'])
            })
    }, [])
    return (
        <div>

        </div>
    );
};

export default TestRequest;
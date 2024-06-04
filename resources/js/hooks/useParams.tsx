export const useParams = (url: string) => {
    const getSearchParams = (url: string) => {
        var indexOfQuestionMark = url.indexOf("?");
        if (indexOfQuestionMark !== -1) {
            var queryString = url.substring(indexOfQuestionMark + 1);

            return queryString;
        }
        return "";
    };

    const urlSearchParams = getSearchParams(url);

    const getUrlWithoutParams = (url: string) => {
        let splittedUrl = url.split("?");
        let urlWithoutParams = splittedUrl[0];
        return urlWithoutParams;
    };

    const getSearchParamsObj = () => {
        try {
            const paramURLArr = urlSearchParams
                .split("&")
                .map((param) => {
                    return param.split("=");
                })
                .map((param: any) => {
                    if (param[1].indexOf("%2C") !== -1) {
                        param[1] = param[1].split("%2C");
                    }
                    return param;
                });

            const paramObj: any = {};
            paramURLArr.forEach((paramURLARR) => {
                paramObj[paramURLARR[0]] = paramURLARR[1];
            });

            return paramObj;
        } catch (error) {
            return {};
        }
    };

    const changeObjectParamtoString = (obj: Record<string, string>) => {
        let paramstring: string = "";
        Object.keys(obj).forEach(function (key) {
            paramstring += key + "=" + obj[key] + "&";
        });
        return paramstring;
    };

    const handleSetParam = (newValueParam: any) => {
        let currentSearchParams = getSearchParamsObj();
        currentSearchParams = { ...currentSearchParams, ...newValueParam };
        window.location.href =
            getUrlWithoutParams(url) +
            "?" +
            changeObjectParamtoString(currentSearchParams);
    };

    return { handleSetParam, getSearchParamsObj };
};

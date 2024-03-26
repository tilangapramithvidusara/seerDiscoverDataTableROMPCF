/* eslint-disable no-unreachable */
import {IInputs, IOutputs} from "./generated/ManifestTypes";
import * as React from "react";
// import { Xrm } from "./global";
// import { fetchRecords } from "./requests";

import * as ReactDOM from "react-dom";
import App from "./src/App";

import { connect } from 'react-redux';

import toJsonSchema = require("to-json-schema");

export class seerDiscoverDataTableROMPCF implements ComponentFramework.StandardControl<IInputs, IOutputs> {

    private theComponent: ComponentFramework.ReactControl<IInputs, IOutputs>;
    private notifyOutputChanged: () => void;
    private response : any;
    private fetchXml: any;
    private entityName: any;
    private outputSchema ?: toJsonSchema.JSONSchema3or4;
    private container: HTMLDivElement;
    private imgElement:HTMLImageElement;
    private imageUrl: string;
    constructor()
    {

    }

    /**
     * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
     * Data-set values are not initialized here, use updateView.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
     * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
     * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
     * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
     */
    public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container:HTMLDivElement): void
    {
        // this.notifyOutputChanged = notifyOutputChanged;
        
        this.imgElement = document.createElement("img");
		context.resources.getResource("refresh.png", this.setImage.bind(this, false, "png"), this.showError.bind(this));
		container.appendChild(this.imgElement);
        this.container = container;
    }

    private setImage(shouldUpdateOutput:boolean, fileType: string, fileContent: string): void
	{
        this.imageUrl = this.generateImageSrcUrl(fileType, fileContent);        
        this.imgElement.src = this.imageUrl;
        this.updateView();
        
	}

    private generateImageSrcUrl(fileType: string, fileContent: string): string
	{
		return  "data:image/" + fileType + ";base64, " + fileContent;
	}

    private showError(): void
	{
        // console.log('error occur');
        
	}


    /**
     * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
     */
    public updateView(context?: ComponentFramework.Context<IInputs>): any
    {   
        // flowurl, accountId, userId, name, azureurl
        // console.log('context?.parameters ==> ', context?.parameters);
        
        const flowurl = context?.parameters?.deleteFlow?.raw;
        const accountId = context?.parameters?.accountId?.raw;
        const userId = context?.parameters?.userId?.raw;
        const name = context?.parameters?.name?.raw;
        const azureurl = context?.parameters?.azureFunction?.raw;
        // localStorage.setItem("flowurl", ('https://uat-18.uksouth.logic.azure.com:443/workflo…0&sig=uWULxjDR3f6LwFWo87fMqmnKL4FaxsiMOO8vIN4E1XY' || flowurl || ''));
        // localStorage.setItem("accountId", ("22506193-8fbe-ee11-9079-002248015232" || "91855757-e8d6-ee11-904d-000d3a0bca56" || "7b95b904-8d5e-ed11-9562-002248428304" || "22506193-8fbe-ee11-9079-002248015232" || "91855757-e8d6-ee11-904d-000d3a0bca56" || "5172763a-52b1-ee11-a569-000d3a0bcfb2" || "22506193-8fbe-ee11-9079-002248015232" || accountId || ''));
        // localStorage.setItem("userId", ("b7d3be6f-a9b3-ee11-a568-002248015232" || userId || ''));
        // localStorage.setItem("name", (name || ''));
        // localStorage.setItem("azureFunction", ("https://poc-rom-in-portal-uat.azurewebsites.net/api/DiscoverSMBROM?code=HwBgZK01CGG1OgSDraJwW3Nj-HdI_VaYznAPufDYEutDAzFuCIQvvg==" || azureurl || ''));
        // "https://rom-in-portal-prod.azurewebsites.net/api/DiscoverSMBROM?code=ud6ha95-yiOmqooksNCaf95hdDJwx60GSu-0hZgypDVDAzFu6G-qBA==" || 
        // "7b95b904-8d5e-ed11-9562-002248428304" ||
        localStorage.setItem("flowurl", (flowurl || ''));
        localStorage.setItem("accountId", (accountId || ''));
        localStorage.setItem("userId", (userId || ''));
        localStorage.setItem("name", (name || ''));
        localStorage.setItem("azureFunction", (azureurl || ''));

        // : React.ReactElement
        // console.log('entity name : ', context?.parameters?.entityName?.raw)
        // console.log('account id : ', context?.parameters?.accountId?.raw)
        // console.log('report id : ', context?.parameters?.reportId.raw)

        // this.jsonLoader();
        // const reportId = context?.parameters?.reportId?.raw;
        // const accountId = context?.parameters?.accountId?.raw;
        // this.dataLoad(reportId, accountId, context)
        // return React.createElement(React.Fragment);

        // ReactDOM.render(React.createElement(App, { tableContent: [], context: context }), this.container);
        this.renderComponent(context);
    }

    private renderComponent(context?: ComponentFramework.Context<IInputs>): void {
        if (this.imageUrl && !this.imageUrl.includes('undefined')) {
            
            // ReactDOM.render(React.createElement(App, { imageUrl: this.imageUrl }), this.container);
            ReactDOM.render(React.createElement(App, { tableContent: [], context: context, imageUrl: this.imageUrl }), this.container);
        } else {
            ReactDOM.render(React.createElement(App, { tableContent: [], context: context }), this.container);
            // ReactDOM.render(React.createElement(App), this.container);
        }
    }

    async dataLoad(reportId: any, accountId: any, context: ComponentFramework.Context<IInputs>) {
        const urlsData = await this.getUrls(reportId, context);

        const {error, result} = urlsData
        if (!error) {
            const entities: any = result?.entities;
            
            const data = entities[0];
            
            await this.jsonLoader(data, accountId);
        } else {
            if(result instanceof Error){
                if(result?.name === "PCFNonImplementedError"){       
                    const data = {
                        "@odata.etag": "W/\"115657148\"",
                        "seerdwp_rompcfconfigurationid": "bd1b3f25-e43c-ee11-bdf4-002248015a1b",
                        "seerdwp_functionappurl": "https://seerv2samplefunctions.azurewebsites.net/api/GetRomData?code=-MzCAimwQEWOrW4ZNgz8ZbETkcPy0LUzQtGMGVOQXpCiAzFupB0xYA==",
                        "seerdwp_jasonobjectformat": "{\n\"id\": \"accountId\"\n}",
                        "seerdwp_reportid": "testROMReport"
                      };
                    // console.log("data ", data);
                        
                    await this.jsonLoader(data, accountId);
                }
            }
        }
    }


    async getUrls(reportId: any, context: ComponentFramework.Context<IInputs>){ 
        //testROMReport
        
        let returnMethod: any = {}
        try {
            
            let result = await context?.webAPI?.retrieveMultipleRecords(
                "seerdwp_rompcfconfiguration", 
                `?$select=seerdwp_rompcfconfigurationid,seerdwp_functionappurl,seerdwp_jasonobjectformat,seerdwp_reportid&$filter=seerdwp_reportid eq '${reportId}'`
            );
            const res: any = result
            returnMethod = {error: false, result: res};
        } catch (error: any) {
            returnMethod = {error: true, result: error}
            
        }
        return returnMethod;
    }

    async jsonLoader(data?: any, accountId?: any) {
        // context: ComponentFramework.Context<IInputs>
        
        const jsonFormat = JSON.parse(data?.['seerdwp_jasonobjectformat']?.trim());
        if (jsonFormat?.['id'] === "accountId") {
            jsonFormat['id'] = accountId;
        }        
        var raw = JSON.stringify(jsonFormat);

        var requestOptions: any = {
            method:'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body:raw,
            redirect:'follow'
        };

        fetch(
            data?.["seerdwp_functionappurl"], 
            requestOptions
        )
        .then(response=> response.json())
        .then((result: any)=> {

            if (result && result?.data && result?.data?.length > 0) {
                this.response = JSON.stringify(result?.data)
                // {...result.data}
                // ?.data
                // JSON.stringify(result?.data)
                if(this.outputSchema == null){
                    this.outputSchema = toJsonSchema(result.data);
                    // ?.data
                }
                // console.log('JSON.stringify(result?.Data', JSON.stringify(result?.data));
                this.notifyOutputChanged();
                // this.getOutputSchema(context);
                // this.getOutputs();
            }

        })
        .catch(error=>console.log('error',error));
    }

    /**
     * It is called by the framework prior to a control receiving new data.
     * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
     */
    // public getOutputs(): IOutputs {
    //     return { output: this.response };
    // }
    // public getOutputs(): IOutputs
    // {
    //     return { 
    //         output: this.response, 
    //         outputSchema : JSON.stringify(this.outputSchema)
    //      };
    // }

    // 33333333####### CORRECT ONE
    // public async getOutputSchema(context: ComponentFramework.Context<IInputs>): Promise<any> {
    //     return Promise.resolve({
    //         output: this.outputSchema
    //     });
    // }

    public destroy(): void
    {
        // Add code to cleanup control if necessary
    }
}

// import { LogicalNames } from "../constants";
import {notification} from "antd";

export const openCopyViewPane = async(
  node: any,
  formType: string,
  messages: any,
  callback: any
) => {
  let selectedNodeData = [{
    "entityType": node.a_attr.LogicalName,
    "id": node?.id,
    "name": node.text,
  }];

  try {
    const templateData =  await window.parent.Xrm.Page.data.entity.getEntityReference();

    var entityFormOptions: any = {};
    entityFormOptions["entityName"] = node?.nextLevelLogicalName
  } catch (error) {
    // console.log("open pane error =====> ", error);
    notification.error({
      message: "Error",
      description: "Copy process failed. Plz Try Again..!",
    });
    callback({
      success: false,
      dataLoadSuccess: false,
      data: null,
      error: true,
    });
  }
}

export const openSidePane = (
  entName: string,
  entId: string,
  e: any,
  isCopy?: boolean,
) => {
  // console.log('plolol =====>', entName, entId, isCopy, e);
  
  const openPanes = window.parent.Xrm.App.sidePanes.getAllPanes();
  openPanes.forEach((item: any) => {
    window.parent.Xrm.App.sidePanes.getPane(item.paneId).close();
  });

  const entityFormOptions: any = {};
  // entityFormOptions[LogicalNames?.ENTITYNAME] = LogicalNames?.SURVEYWORKITEM;
  // entName;
  const formParameters: any = {};
  formParameters["seer_taskname"] = e?.name;
  formParameters["seer_m"] = e?.M.toString()
  formParameters["seer_ms"] = e?.['M/S'].toString();
  formParameters["seer_msc"] = e?.['M/S/C'].toString();
  if (entId != null) {
    window.parent.Xrm.App.sidePanes
      .createPane({
        title: e?.title,
        // imageSrc: e?.imgUrl,
        paneId: e?.id,
        hideHeader: false,
        canClose: true,
        width: 500,
      })
      .then(async(pane: any) => {
        
        await pane.navigate({
          pageType: "entityrecord",
          entityName: "seer_resource",
          entityId: "47ca2d7d-49ee-ec11-b5cf-0003ff39999c",
          // "8be62fc3-6d54-ed11-97b2-0003ff39894f",
          formId: "8d58b985-f558-ee11-be6f-00224801508b",
          // "8b0223cd-7853-ee11-be6f-000d3a0bca56",
          createFromEntityName: "seer_resource",
          formType: 2,
          entityFormOptions: {
            entityName: 'seer_resource',
          },
          data: formParameters,
        });
      }).catch((error: any) => {
        console.log('error ===> ', error);
        
      });
  } else {
    entId = "";
  }
}
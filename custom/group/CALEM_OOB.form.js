/** Calem JS package */
CalemFormCustomDef['CalemAssetFormMdTab_CALEM_OOB']= {CalemFormCustomInfo: {id: 'CalemAssetFormMdTab', acl: {CalemFormAclInfo: {tabAcl: {tab_part: 1,tab_comment: 1,tab_misc: 1}, formAcl: {}}}, layout: {CalemMdTabLayoutInfo: {tabList: ['tab_main', 'tab_downtime', 'CUSTOMIZE_TAB', 'tab_meter', 'tab_depreciation'], tabMap: {tab_main: {CalemTabLayoutInfo: ['CalemAssetFormRead']},tab_downtime: {CalemTabLayoutInfo: ['CalemAssetDowntimeFormList', 'CalemAssetCommentFormList']},tab_meter: {CalemTabLayoutInfo: ['CalemAssetMeterFormList', 'CalemAssetPartFormList']},tab_depreciation: {CalemTabLayoutInfo: ['CalemAssetDepreciationFormList']}}}}}};
CalemFormCustomDef['CalemInFormMdTab_CALEM_OOB']= {CalemFormCustomInfo: {id: 'CalemInFormMdTab', acl: {CalemFormAclInfo: {tabAcl: {tab_tran: 1,tab_misc: 1,tab_vendor: 1}, formAcl: {}}}, layout: {CalemMdTabLayoutInfo: {tabList: ['tab_main', 'CUSTOMIZE_TAB', 'tab_stock', 'tab_reserved', 'tab_doc', 'tab_audit'], tabMap: {tab_main: {CalemTabLayoutInfo: ['CalemInFormRead']},tab_stock: {CalemTabLayoutInfo: ['CalemInStockFormList', 'CalemInTranFormList']},tab_reserved: {CalemTabLayoutInfo: ['CalemInReservedFormList', 'CalemInVendorFormList']},tab_doc: {CalemTabLayoutInfo: ['CalemInDocFormList', 'CalemInCommentFormList']},tab_audit: {CalemTabLayoutInfo: ['CalemInAuditFormList']}}}}}};
CalemFormCustomDef['CalemPmFormMdTab_CALEM_OOB']= {CalemFormCustomInfo: {id: 'CalemPmFormMdTab', acl: {CalemFormAclInfo: {tabAcl: {tab_downtime: 1,tab_dependency: 1,tab_misc: 1}, formAcl: {}}}, layout: {CalemMdTabLayoutInfo: {tabList: ['tab_main', 'CUSTOMIZE_TAB', 'tab_asset', 'tab_labor', 'tab_material', 'tab_step', 'tab_document', 'tab_audit'], tabMap: {tab_main: {CalemTabLayoutInfo: ['CalemPmFormRead']},tab_asset: {CalemTabLayoutInfo: ['CalemPmAssetFormList', 'CalemPmDependencyFormList']},tab_labor: {CalemTabLayoutInfo: ['CalemPmLaborFormList', 'CalemPmDowntimeFormList']},tab_material: {CalemTabLayoutInfo: ['CalemPmToolFormList','CalemPmPartFormList']},tab_step: {CalemTabLayoutInfo: ['CalemPmStepFormList', 'CalemPmSafetyFormList']},tab_document: {CalemTabLayoutInfo: ['CalemPmDocFormList', 'CalemPmCommentFormList']},tab_audit: {CalemTabLayoutInfo: ['CalemPmAuditFormList']}}}}}};
CalemFormCustomDef['CalemPoReportMdTab_CALEM_OOB']= {CalemFormCustomInfo: {id: 'CalemPoReportMdTab', acl: {CalemFormAclInfo: {tabAcl: {}, formAcl: {}}}, layout: {CalemMdTabLayoutInfo: {tabList: ['tab_main', 'CUSTOMIZE_TAB'], tabMap: {tab_main: {CalemTabLayoutInfo: ['CalemPoReportRead', 'CalemPoItemReportList']}}}}}};
CalemFormCustomDef['CalemReqReportMdTab_CALEM_OOB']= {CalemFormCustomInfo: {id: 'CalemReqReportMdTab', acl: {CalemFormAclInfo: {tabAcl: {}, formAcl: {}}}, layout: {CalemMdTabLayoutInfo: {tabList: ['tab_main', 'CUSTOMIZE_TAB'], tabMap: {tab_main: {CalemTabLayoutInfo: ['CalemReqReportRead', 'CalemReqItemReportList']}}}}}};
CalemFormCustomDef['CalemWoFormMdTab_CALEM_OOB']= {CalemFormCustomInfo: {id: 'CalemWoFormMdTab', acl: {CalemFormAclInfo: {tabAcl: {tab_step: 1,tab_meter: 1,tab_comment: 1,tab_document: 1,tab_status: 1}, formAcl: {}}}, layout: {CalemMdTabLayoutInfo: {tabList: ['tab_main', 'CUSTOMIZE_TAB', 'tab_instruction', 'tab_labor', 'tab_part', 'tab_tool', 'tab_downtime', 'tab_misc'], tabMap: {tab_main: {CalemTabLayoutInfo: ['CalemWoFormRead']},tab_instruction: {CalemTabLayoutInfo: ['CalemWoStepFormList', 'CalemWoSafetyFormList', 'CalemWoDocFormList']},tab_labor: {CalemTabLayoutInfo: ['CalemWoPlannedLaborFormList', 'CalemWoSchedLaborFormList', 'CalemWoLaborFormList']},tab_part: {CalemTabLayoutInfo: ['CalemWoPlannedPartFormList', 'CalemWoPartFormList']},tab_tool: {CalemTabLayoutInfo: ['CalemWoPlannedToolFormList', 'CalemWoToolFormList']},tab_downtime: {CalemTabLayoutInfo: ['CalemWoPlannedDowntimeFormList', 'CalemWoDowntimeFormList']},tab_misc: {CalemTabLayoutInfo: ['CalemWoCommentFormList', 'CalemWoMeterFormList']}}}}}};
CalemFormCustomDef['CalemWoReportMdTab_CALEM_OOB']= {CalemFormCustomInfo: {id: 'CalemWoReportMdTab', acl: {CalemFormAclInfo: {tabAcl: {}, formAcl: {CalemWoPlannedToolReportList: 1,CalemWoPlannedPartReportList: 1,CalemWoPlannedDowntimeReportList: 1,CalemWoDocReportList: 1,CalemWoMeterReportList: 1,CalemWoToolReportList: 1,CalemWoDowntimeReportList: 1,CalemWoCommentReportList: 1}}}, layout: {CalemMdTabLayoutInfo: {tabList: ['tab_main', 'CUSTOMIZE_TAB'], tabMap: {tab_main: {CalemTabLayoutInfo: ['CalemWoReportRead', 'CalemWoStepReportList', 'CalemWoSafetyReportList', 'CalemWoPlannedLaborReportList', 'CalemWoSchedLaborReportList', 'CalemWoLaborReportList', 'CalemWoPartReportList']}}}}}};
/*
 * The contents of this file are subject to the CalemEAM Public License Version
 * 1.0 ("License"); You may not use this file except in compliance with the
 * License. You may obtain a copy of the License at http://www.calemeam.com/license
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied.  See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is: CalemEAM Open Source
 *
 * The Initial Developer of the Original Code is CalemEAM Inc.
 * Portions created by CalemEAM are Copyright (C) 2007 CalemEAM Inc.;
 * All Rights Reserved.
 
 * Contributor(s): 
 */
 

/**
 * CalemPoItemFormRead
 */
function CalemPoItemFormRead(parent, formId, data) {
	if (arguments.length==0) return;
	CalemFormReadDet.call(this, parent, formId, data);
}

CalemPoItemFormRead.prototype = new CalemFormReadDet;
CalemPoItemFormRead.prototype.constructor = CalemPoItemFormRead;

CalemPoItemFormRead.prototype.toString = function() { return "CalemPoItemFormRead";}

/**
 * Business APIs
 */
CalemPoItemFormRead.prototype._getFormNewId =
function() {
	return 'CalemPoItemFormNew';
} 

CalemPoItemFormRead.prototype._getFormEditId =
function() {
	return 'CalemPoItemFormEdit';
}

CalemPoItemFormRead.prototype.canCreate =
function() {
	return this._canModify();
} 

CalemPoItemFormRead.prototype.canEdit =
function() {
	return this._canModify();
} 

CalemPoItemFormRead.prototype.canDelete =
function(evt) {
	var rec=CalemEvent.getItem(evt); //Event might be changed...
	//Is Req closed?
	if (!this._canModify()) return false;
	//Is item on PO
	return CalemPoItemBo.getInstance().canDelete(rec);
} 

CalemPoItemFormRead.prototype._canModify =
function() {
	var rec=this._dataModel.getParentRec();
	return CalemPoBo.getInstance().canModify(rec);
}


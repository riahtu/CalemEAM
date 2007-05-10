<?php
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


//Checking basic initialization
if (!defined('_CALEM_DIR_')) die("Access denied at ".__FILE__);

$_CALEM_table=array(
    'table_name'=>'users', //No translation needed.
    'dbo'=>array(
    	'path'=>'server/modules/admin/',
    	'name'=>'CalemUserDbo',
    ),
    'module'=>'modCalemAdmin',
    'cache_type'=>'memory',
    'order_by'=>array('field'=>'username', 'order'=>'ASC'),
    'primary_key'=>array(
    	'id'
    ),
    'unique_indexes'=>array(
    	'uidx_users_username'=>array(
    		'username'
    	),
    ),
    'lookup_mapping'=>array(
    	'field'=>'id',
		'primary'=>'username',
		'extra'=>array(
	    	'username',
	    	'full_name',
	    	'phone_work',
	    	'phone_mobile',
	    	'email_work'
	    )
    ),
    'fields'=>array(
    	'id'=>array(
    		'type'=>'guid'  		
    	),
    	'username'=>array(
    		'type'=>'varchar',
    		'length'=>30,
    		'required'=>true,
    	),
    	'status_id'=>array(
    		'type'=>'guid',
    		'lookup'=>'user_status'
    	),
    	'password'=>array(
    		'type'=>'varchar',
    		'length'=>32,
    		'input_length'=>20,
    		'required'=>true,
    		'is_password'=>true
    	),
    	'user_type_id'=>array(
    		'type'=>'guid',
    		'lookup'=>'user_type'
    	),
    	'emp_no'=>array(
    		'type'=>'varchar',
    		'length'=>30,
    	),
    	'contractor_id'=>array(
    		'type'=>'guid',
    		'lookup'=>'contractor'
    	),
    	'job_role_id'=>array(
    		'type'=>'guid',
    		'lookup'=>'job_role'
    	),
    	'login_allowed'=>array(
    		'type'=>'boolean',
    		'default'=>1,
    	),
    	'full_name'=>array(
    		'type'=>'varchar',
    		'length'=>30,
    		'required'=>true    		
    	),
    	'job_title'=>array(
    		'type'=>'varchar',
    		'length'=>30
    	),
    	'note'=>array(
    		'type'=>'varchar',
    		'length'=>76
    	),
    	'acl_group_id'=>array(
    		'type'=>'guid',
    		'lookup'=>'acl_group',
    		'required'=>true
    	),
    	'admin_type_id'=>array(
    		'type'=>'guid',
    		'lookup'=>'search_admin',
    		'default'=>'search_admin_none'
    	),
    	'team_id'=>array(
    		'type'=>'guid',
    		'lookup'=>'team'
    	),
    	'supervisor_id'=>array(
    		'type'=>'guid',
    		'lookup'=>'users'
    	),
    	'dept_id'=>array(
    		'type'=>'guid',
    		'lookup'=>'dept'
    	),
    	'costcode_id'=>array(
    		'type'=>'guid',
    		'lookup'=>'costcode'
    	),
    	'req_approval_id'=>array(
    		'type'=>'guid',
    		'lookup'=>'req_approval_level'
    	),
    	'po_approval_id'=>array(
    		'type'=>'guid',
    		'lookup'=>'po_approval_level'
    	),
    	'craft_id'=>array(
    		'type'=>'guid',
    		'lookup'=>'craft'
    	),
    	'phone_work'=>array(
    		'type'=>'varchar',
    		'length'=>24
    	),
    	'phone_home'=>array(
    		'type'=>'varchar',
    		'length'=>16
    	),
    	'phone_mobile'=>array(
    		'type'=>'varchar',
    		'length'=>16
    	),
    	'email_work'=>array(
    		'type'=>'varchar',
    		'length'=>30
    	),
    	'email_other'=>array(
    		'type'=>'varchar',
    		'length'=>30
    	),
    	'im1_type_id'=>array(
    		'type'=>'guid',
    		'lookup'=>'im_type'
    	),
    	'im1_id'=>array(
    		'type'=>'varchar',
    		'length'=>30
    	),
    	'im2_type_id'=>array(
    		'type'=>'guid',
    		'lookup'=>'im_type'
    	),
    	'im2_id'=>array(
    		'type'=>'varchar',
    		'length'=>30
    	),
    	'fax'=>array(
    		'type'=>'varchar',
    		'length'=>16
    	),
    	'company'=>array(
    		'type'=>'varchar',
    		'length'=>30
    	),
    	'street1'=>array(
    		'type'=>'varchar',
    		'length'=>50
    	),
    	'street2'=>array(
    		'type'=>'varchar',
    		'length'=>50
    	),
    	'city'=>array(
    		'type'=>'varchar',
    		'length'=>30
    	),
    	'state'=>array(
    		'type'=>'varchar',
    		'length'=>30
    	),
    	'zip'=>array(
    		'type'=>'varchar',
    		'length'=>16
    	),
    	'country'=>array(
    		'type'=>'varchar',
    		'length'=>30
    	),
    	'modified_time'=>array(
    		'type'=>'datetime'
    	),
    	'modified_id'=>array(
    		'type'=>'guid',
    		'lookup'=>'users'
    	),
    	'created_time'=>array(
    		'type'=>'datetime'
    	),
    	'created_id'=>array(
    		'type'=>'guid',
    		'lookup'=>'users'
    	)    	   
    ) //End of fields list    
) 
?>

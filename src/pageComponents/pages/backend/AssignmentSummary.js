import React from 'react';
import {Link} from 'react-router-dom';


const projectSummary = ({assignment})=>{  
      
   
        return(   
                
                    <tr>
                    <td>
                        <label class="kt-checkbox kt-checkbox--single">
                        <input type="checkbox"/><span></span></label>
                    </td>
                     <td>
                     <Link to ={'/assignment/' + assignment.title}>
                        <span>{assignment.title}</span>
                        </Link>
                    </td>
                    <td>
                        {assignment.deadline}
                    </td>
                    <td>
                        {assignment.pages}                        
                    </td>
                    <td>
                        <span class="kt-badge kt-badge--success kt-badge--inline">pending</span>
                    </td>
                    <td class="kt-align-right kt-font-brand kt-font-bold">{assignment.price}</td>
                </tr>
               
        );   

}

export default projectSummary;
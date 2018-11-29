import React, { Component} from 'react';
import Banner from './banner.js';
import Info from './info.js';
class Content extends Component{

    render(){
        const styles = {
            container: {
              color: '#44546b',
              cursor: 'pointer',
              border: '1px solid black'
            }
          }
        return(
            <div style = {styles.container}>
<p><Banner/></p>
<p><Info/></p>

            </div>
                
          
        )
    }
}
export default Content;
import React from "react";
import { observer } from "mobx-react";
import { observablePageStore } from "../../dataStors/dataStorePage";


@observer
class SecondaryPage extends React.Component {


  render() {
    const pageData = this.props.pageData;  
    const content = {
      __html: pageData.content.rendered
    };
    const children = observablePageStore.getPageChildrenById(pageData.id);
    console.log(children.length, pageData.id);
    return (
      <div>
       {children.map(child => <div> {child.title.rendered} </div>)}
        <h1>{pageData.title.rendered}</h1>
        <div dangerouslySetInnerHTML={content}></div>
      </div>
    );
  }
}

export default SecondaryPage;

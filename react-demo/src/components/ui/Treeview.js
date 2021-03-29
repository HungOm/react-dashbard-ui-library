import React, { Component } from 'react'
import SortableTree from 'react-sortable-tree'
import '../../vendor/libs/react-sortable-tree/react-sortable-tree.scss'
import FileExplorerTheme from 'react-sortable-tree-theme-file-explorer'

class Treeview extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Treeview - UI elements')

    this.state = {
      treeData: [
        { title: 'Option 1', children: [
          { title: 'Option 1.1' },
          { title: 'Option 1.2' },
          { title: 'Option 1.3', children: [
            { title: 'Option 1.3.1' },
            { title: 'Option 1.3.2'},
            { title: 'Option 1.3.3'}
          ] },
          { title: 'Option 1.4' }
        ] },
        { title: 'Option 2' },
        { title: 'Option 3' },
        { title: 'Option 4', children: [
          { title: 'Option 4.1' },
          { title: 'Option 4.2' }
        ] },
        { title: 'Option 5' }
      ],
      directoryTree: [{
        title: 'Folder_1/',
        children: [
          { title: 'File_1_1.js' },
          { title: 'File_1_2.js' },
          { title: 'Folder_1_3/', children: [
            { title: 'File_1_3_1.js' },
            { title: 'File_1_3_2.js' },
            { title: 'File_1_3_3.js' }
          ] },
          { title: 'File_1_4.js' }
        ] },
        { title: 'File_2.js' },
        { title: 'File_3.js' },
        { title: 'Folder_4/', children: [
          { title: 'File_4_1.js' },
          { title: 'File_4_2.js' }
        ] },
        { title: 'File_5.js' }
      ]
    }
  }

  render() {
    const isRtl = document.documentElement.getAttribute('dir') === 'rtl'
    const isIE10Mode = document['documentMode'] === 10

    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">UI elements /</span> Treeview
        </h4>

        <hr className="container-m-nx border-light mt-0" />

        <h5 className="font-weight-bold pt-1 pb-1 mt-4 mb-4">react-sortable-tree</h5>

        {isIE10Mode && <div className="alert alert-danger">
          <strong>react-sortable-tree</strong> doesn't support Internet Explorer 10
        </div>}

        {!isIE10Mode &&
          <div className="row align-items-stretch" style={{ height: 600 }}>
            <div className="col-md-6 overflow-auto">
              <SortableTree
                treeData={this.state.treeData}
                onChange={treeData => this.setState({ treeData })}
                rowHeight={50}
                rowDirection={isRtl ? 'rtl' : 'ltr'}
              />
            </div>
            <div className="col-md-6 overflow-auto">
              <SortableTree
                treeData={this.state.directoryTree}
                onChange={directoryTree => this.setState({ directoryTree })}
                theme={FileExplorerTheme}
                rowDirection={isRtl ? 'rtl' : 'ltr'}
              />
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Treeview

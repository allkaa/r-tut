// Traditional very first custom class component - App
// (capitalize custom components to differentiate them from regular HTML elements).
import React, { Component } from 'react'

class App extends Component {

  // We'll need the constructor() to use `this`, and to receive the props of the parent.
  constructor(props) {
    super(props)
    console.log('App constructor initial props')
    console.log(props)

    console.log('App constructor this.state before settings test data')
    console.log(this.state)
    this.state = {characters: [
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
    ]}
    console.log('App constructor this.state after settings test data')
    console.log(this.state)
  }

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    let one = document.querySelector('.one');
    let two = document.querySelector('.two');
    let p1 = document.querySelector('#p1');
    let p2 = document.querySelector('#p2');

    let txt
    let width = one.offsetWidth;
    let height = one.offsetHeight;
    txt = 'Boxes default box-sizing Width: ' + width + 'px, Height: ' + height + 'px. ';
    width = p1.offsetWidth;
    height = p1.offsetHeight;
    txt = txt + '<p1> Width: ' + width + 'px, Height: ' + height + 'px. ';
    let p1i = document.querySelector('#p1info');
    p1i.textContent = txt

    width = two.offsetWidth;
    height = two.offsetHeight;
    //two.textContent = 'Boxes box-sizing: border-box Width two: ' + width + 'px, Height: ' + height + 'px.';
    txt = 'Boxes box-sizing: border-box Width: ' + width + 'px, Height: ' + height + 'px. ';
    width = p2.offsetWidth;
    height = p2.offsetHeight;
    txt = txt + '<p2> Width: ' + width + 'px, Height: ' + height + 'px. ';
    let p2i = document.querySelector('#p2info');
    p2i.textContent = txt
  }

  // A class component must include render(), and the return statement can only return ONE parent element:
  render() {
    //const { characters } = this.state
    // Render of re-render with Table and Form childs.
    console.log('========> App render <==========')
    return (
      <div className="container">
        {/*<Table characterData={this.state.characters} />*/}
        <h1>Box heights don't observe percentage lengths; box height always adopts the height of the box content, unless a specific absolute height is set (e.g. pixel-s or (r)em-s.)  </h1>
        <div class="one">
          <p id='p1'>Boxes sample - default box-sizing:content-box</p>
        </div>
        <p id='p1info'>piInfo</p>
        <div class="two">
          <p id='p2'>Boxes sample -  box-sizing: border-box;</p>
        </div>        
        <p id='p2info'>piInfo</p>
      </div>
    )}
}

export default App
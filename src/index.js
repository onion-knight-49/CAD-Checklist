import React from 'react'
import ReactDOM from 'react-dom'
import styled, { css, createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin-top: 25px;
    background-color: rgb(31, 33, 36);
    color: white;
    font-family: Helvetica Neue, calibri, helvetica, arial;
  }
`

const TaskNameWrapper = styled.h5`
  width: 100%;
  margin-left: 10px;
  letter-spacing: 1px;
  font-weight: 125;
`

const TaskWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  width: 100%;
  border: 1px solid;
  border-image: radial-gradient(ellipse at center, white, rgb(31, 33, 35)) 11 0%;
  border-right: none;
  border-left: none;
  margin-bottom: 10px;
  margin-right: 10px;
  margin-left: 10px;
  background-color: rgb(61, 62, 64);
  background: -webkit-gradient(
    linear,
    0 0,
    100% 0,
    from(rgb(31, 33, 35)),
    to(rgb(31, 33, 35)),
    color-stop(
      50%,
      ${props => (props.dark ? 'rgb(44, 45, 47)' : 'rgb(61, 62, 64)')}
    )
  );
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  background: ${props => (props.checked ? 'rgb(157, 33, 40)' : 'black')};
  border-radius: 100%;
  transition: all 150ms;
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px red;
  }
`

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
  width: 18px;
`

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-left: 10px;
`

const SubCheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-left: 40px;
`

const SubSubCheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-left: 70px;
`

const LabelWrapper = styled.label`
  display: flex;
`

const Checkbox = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
)

const SubCheckbox = ({ className, checked, ...props }) => (
  <SubCheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </SubCheckboxContainer>
)

const SubSubCheckbox = ({ className, checked, ...props }) => (
  <SubSubCheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </SubSubCheckboxContainer>
)

class Task extends React.Component {
  state = { checked: false }
  handleCheckboxChange = event =>
    this.setState({ checked: event.target.checked })
  render() {
    return (
      <LabelWrapper>
        <TaskWrapper>
          <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
          />
          <TaskNameWrapper>{this.props.task}</TaskNameWrapper>
        </TaskWrapper>
      </LabelWrapper>
    )
  }
}

class SubTask extends React.Component {
  state = { checked: false }
  handleCheckboxChange = event =>
    this.setState({ checked: event.target.checked })
  render() {
    return (
      <LabelWrapper>
        <TaskWrapper>
          <SubCheckbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
          />
          <TaskNameWrapper>{this.props.task}</TaskNameWrapper>
        </TaskWrapper>
      </LabelWrapper>
    )
  }
}

class SubSubTask extends React.Component {
  state = { checked: false }
  handleCheckboxChange = event =>
    this.setState({ checked: event.target.checked })
  render() {
    return (
      <LabelWrapper>
        <TaskWrapper>
          <SubSubCheckbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
          />
          <TaskNameWrapper>{this.props.task}</TaskNameWrapper>
        </TaskWrapper>
      </LabelWrapper>
    )
  }
}

const areas = [
  {
    name: 'Besaid',
    fiends: [
      { name: 'Dingo', species: 'Wolf' },
      { name: 'Condor', species: 'Bird' },
      { name: 'Water Flan', species: 'Flan' }
    ]
  },
  {
    name: 'Kilika',
    fiends: [
      { name: 'Dinonix', species: 'Lizard' },
      { name: 'Killer Bee', species: 'Insect' },
      { name: 'Yellow Element', species: 'Element' },
      { name: 'Ragora' }
    ]
  }
]

class App extends React.Component {
  render() {
    return (
      <>
        <Task task="Pull up selected proposal PDF" />
        <Task task="Open all site photos" />
        <Task task="Search address in Google Maps & Near Maps" />
        <Task task="Search customer name to check pre-drawing" />
        <Task task="If no pre-drawing, download applicable template" />
        <Task task="Download Proposal to Customer Folder, Rename" />
        <Task task="Screenshot comments into images folder" />
        <Task task="Screenshot reference photo into images folder" />
        <Task task="Open Excel" />
        <SubTask task="Customer Info" />
        <SubTask task="Site Info" />
        <SubTask task="Equipment Info" />
        <SubSubTask task="Module" />
        <SubSubTask task="Module Quantity" />
        <SubSubTask task="Inverter" />
        <SubSubTask task="Railing MFR" />
        <SubSubTask task="Attachment" />
        <SubSubTask task="Tilt" />
        <SubSubTask task="Azimuth" />
        <SubTask task="String Sizes" />
        <Task task="Open CAD" />
        <Task task="Image attach reference photo" />
        <Task task="Draw reference line" />
        <Task task="Scale" />
        <Task task="Grab compass, Rotate" />
        <Task task="Draw house" />
        <Task task="Draw obstructions" />
        <Task task="Move house and compass to drawing area" />
        <Task task="Find MSP, draw equipment on side of home" />
        <Task task="Draw offsets" />
        <Task task="Draw modules" />
        <Task task="Add junction box" />
        <Task task="Draw property lines" />
        <Task task="Finish equipment info in Excel/Draw attachments if needed" />
        <Task task="Save Excel, Minimize" />
        <Task task="Save CAD, Update data links in CAD, Regen All" />
        <Task task="PV01" />
        <SubTask task="Paste in images (381x345) (762x690)" />
        <SubTask task="Update contractor info if needed" />
        <Task task="PV02" />
        <SubTask task="DIM" />
        <SubTask task="Front Of Home Label" />
        <SubTask task="MP Labels" />
        <SubTask task="Street" />
        <Task task="PV03" />
        <SubTask task="Front Of Home Label" />
        <SubTask task="MP Labels" />
        <SubTask task="DIM Fire Setbacks" />
        <Task task="PV04" />
        <SubTask task="Zoom in, DIM attachments if drawn" />
        <Task task="PV05" />
        <SubTask task="Select applicable drop down option" />
        <Task task="PV06" />
        <SubTask task="Select applicable drop down options" />
        <SubTask task="Insert applicable notes" />
        <Task task="PV07" />
        <SubTask task="Select applicable drop down option" />
        <Task task="PV08" />
        <SubTask task="Front Of Home Label" />
        <SubTask task="PV Array Label" />
        <SubTask task="MSP Label" />
        <SubTask task="Applicable Inverter Label(s)" />
        <Task task="PV09" />
        <SubTask task="Paste in images" />
        <Task task="Double check comments" />
        <Task task="Get peer reviewed" />
        <Task task="Save, Publish CAD" />
        <Task task="Close CAD, Proposal PDF tab, Excel" />
        <Task task="Combine spec sheets, Save, Close PDF" />
        <Task task="If Encor, Complete BOM, Upload to BOM Folder " />
        <SubTask task="https://drive.google.com/drive/folders/1RzXsQPnHIx1zSnx996RKXNPjV-cGo1yE" />
        <Task task="Put PDF into customer folder, Upload folder to Drive" />
        <Task task="Upload PDF to Phoenix, Mark CAD Complete" />
        <Task task="Drag customer folder in Month folder on desktop" />
      </>
    )
  }
}

// ========================================

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
)

// class App extends React.Component {
//   render() {
//     return (
//       <AppWrapper>
//         <div>
//           <div>
//             <TitleWrapper>Final Fantasy X Arena Companion App!</TitleWrapper>
//           </div>
//           <Area name="Besaid">
//             <div>
//               <Fiend name="Dingo" species="Wolf" />
//               <Fiend dark name="Conder" species="Bird" />
//               <Fiend name="Water Flan" species="Flan" />
//               <AreaConquest dark name="Area Conquest Completion" />
//             </div>
//           </Area>
//           <Area name="Kilika">
//             <div>
//               <Fiend name="Dinonix" species="Lizard" />
//               <Fiend dark name="Killer Bee" species="Insect" />
//               <Fiend name="Yellow Element" species="Element" />
//               <Fiend dark name="Ragora" />
//               <AreaConquest name="Area Conquest Completion" />
//             </div>
//           </Area>
//         </div>
//       </AppWrapper>
//     )
//   }
// }

// class App extends React.Component {
//   render() {
//     let a = 0
//     return (
//       <div>
//         <div>
//           <TitleWrapper>Final Fantasy X Arena Companion App!</TitleWrapper>
//         </div>
//         {areas.map((area, i) => (
//           <Area name={area.name}>
//             <div>
//               {area.fiends.map((fiend, j) => (
//                 <Fiend
//                   count={this.state.counts[i][j]}
//                   increment={() => this.increment(i, j)}
//                   decrement={() => this.decrement(i, j)}
//                   name={fiend.name}
//                   species={fiend.species}
//                   dark={a++ % 2 === 0}
//                 />
//               ))}
//               <AreaConquest
//                 counts={this.state.counts[i]}
//                 dark={a++ % 2 === 0}
//                 name="Area Conquest Completion"
//               />
//             </div>
//           </Area>
//         ))}
//       </div>
//     )
//   }
// }

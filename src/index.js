import React from 'react'
import ReactDOM from 'react-dom'
import styled, { css, createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin-top: 25px;
    margin-bottom: 300px;
    background-color: rgb(31, 33, 36);
    color: white;
    font-family: Helvetica Neue, calibri, helvetica, arial;
  }
`

const TitleNameWrapper = styled.h3`
  width: 100%;
  margin-left: 10px;
  letter-spacing: 1px;
  font-weight: 125;
`

const TaskNameWrapper = styled.h5`
  width: 100%;
  margin-left: 10px;
  letter-spacing: 1px;
  font-weight: 125;
`

const TaskNameHeaderWrapper = styled.h5`
  width: 100%;
  margin-left: 45px;
  letter-spacing: 1px;
  font-weight: 125;
`

const SubTaskNameHeaderWrapper = styled.h5`
  width: 100%;
  margin-left: 80px;
  letter-spacing: 1px;
  font-weight: 125;
`

const SubSubTaskNameHeaderWrapper = styled.h5`
  width: 100%;
  margin-left: 10px;
  letter-spacing: 1px;
  font-weight: 125;
`

const TaskWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  width: 100%;
  border: 1px solid;
  border-image: radial-gradient(ellipse at center, white, rgb(31, 33, 35)) 11 0%;
  border-right: none;
  border-left: none;
  margin-bottom: 5px;
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
    box-shadow: 0 0 0 1px red;
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
  margin-left: 45px;
`

const PvSubCheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-left: 70px;
`

const SubSubCheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-left: 100px;
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

const PvSubCheckbox = ({ className, checked, ...props }) => (
  <PvSubCheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </PvSubCheckboxContainer>
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

class Title extends React.Component {
  render() {
    return <TitleNameWrapper>{this.props.title}</TitleNameWrapper>
  }
}

class Task extends React.Component {
  state = { checked: false }
  handleCheckboxChange = event =>
    this.setState({ checked: event.target.checked })
  render() {
    return (
      <LabelWrapper>
        <TaskWrapper dark={this.props.dark}>
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

class TaskHeader extends React.Component {
  render() {
    return (
      <LabelWrapper>
        <TaskWrapper dark={this.props.dark}>
          <TaskNameHeaderWrapper>{this.props.task}</TaskNameHeaderWrapper>
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
        <TaskWrapper dark={this.props.dark}>
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

class PvSubTask extends React.Component {
  state = { checked: false }
  handleCheckboxChange = event =>
    this.setState({ checked: event.target.checked })
  render() {
    return (
      <LabelWrapper>
        <TaskWrapper dark={this.props.dark}>
          <PvSubCheckbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
          />
          <TaskNameWrapper>{this.props.task}</TaskNameWrapper>
        </TaskWrapper>
      </LabelWrapper>
    )
  }
}

class SubTaskHeader extends React.Component {
  render() {
    return (
      <LabelWrapper>
        <TaskWrapper dark={this.props.dark}>
          <SubTaskNameHeaderWrapper>{this.props.task}</SubTaskNameHeaderWrapper>
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
        <TaskWrapper dark={this.props.dark}>
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

class SubSubTaskHeader extends React.Component {
  render() {
    return (
      <LabelWrapper>
        <TaskWrapper dark={this.props.dark}>
          <SubSubTaskNameHeaderWrapper>
            {this.props.task}
          </SubSubTaskNameHeaderWrapper>
        </TaskWrapper>
      </LabelWrapper>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <>
        <Title title="CAD Checklist" />
        <Task task="Pull up selected proposal PDF" />
        <Task dark task="Open all site photos" />
        <Task task="Search address in Google Maps & Near Maps" />
        <Task dark task="Search customer name to check pre-drawing" />
        <Task task="If no pre-drawing, download applicable template" />
        <Task dark task="Download Proposal to Customer Folder, Rename" />
        <Task task="Screenshot comments into images folder" />
        <Task dark task="Screenshot reference photo into images folder" />
        <Task task="Open Excel" />
        <SubTask dark task="Customer Info" />
        <SubTask task="Site Info" />
        <SubTaskHeader dark task="Equipment Info" />
        <SubSubTask task="Module" />
        <SubSubTask dark task="Module Quantity" />
        <SubSubTask task="Inverter" />
        <SubSubTask dark task="Railing MFR" />
        <SubSubTask task="Attachment" />
        <SubSubTask dark task="Tilt" />
        <SubSubTask task="Azimuth" />
        <SubTask dark task="String Sizes" />
        <Task task="Open CAD" />
        <Task dark task="Image attach reference photo" />
        <Task task="Draw reference line" />
        <Task dark task="Scale" />
        <Task task="Grab compass, Rotate" />
        <Task dark task="Draw house" />
        <Task task="Draw obstructions" />
        <Task dark task="Move house and compass to drawing area" />
        <Task task="Find MSP, draw equipment on side of home" />
        <Task dark task="Draw offsets" />
        <Task task="Draw modules" />
        <Task dark task="Add junction box" />
        <Task task="Draw property lines" />
        <Task
          dark
          task="Finish equipment info in Excel/Draw attachments if needed"
        />
        <Task task="Save Excel, Minimize" />
        <Task dark task="Save CAD, Update data links in CAD, Regen All" />
        <TaskHeader task="PV01" />
        <PvSubTask dark task="Paste in images (381x345) (762x690)" />
        <PvSubTask task="Update contractor info if needed" />
        <TaskHeader dark task="PV02" />
        <PvSubTask task="DIM" />
        <PvSubTask dark task="Front Of Home Label" />
        <PvSubTask task="MP Labels" />
        <PvSubTask dark task="Street" />
        <TaskHeader task="PV03" />
        <PvSubTask dark task="Front Of Home Label" />
        <PvSubTask task="MP Labels" />
        <PvSubTask dark task="DIM Fire Setbacks" />
        <TaskHeader task="PV04" />
        <PvSubTask dark task="Zoom in, DIM attachments if drawn" />
        <TaskHeader task="PV05" />
        <PvSubTask dark task="Select applicable drop down option" />
        <TaskHeader task="PV06" />
        <PvSubTask dark task="Select applicable drop down options" />
        <PvSubTask task="Insert applicable notes" />
        <TaskHeader dark task="PV07" />
        <PvSubTask task="Select applicable drop down option" />
        <TaskHeader dark task="PV08" />
        <PvSubTask task="Front Of Home Label" />
        <PvSubTask dark task="PV Array Label" />
        <PvSubTask task="MSP Label" />
        <PvSubTask dark task="Applicable Inverter Label(s)" />
        <TaskHeader task="PV09" />
        <PvSubTask dark task="Paste in images" />
        <Task task="Double check comments" />
        <Task dark task="Get peer reviewed" />
        <Task task="Save, Publish CAD" />
        <Task dark task="Close CAD, Proposal PDF tab, Excel" />
        <Task task="Combine spec sheets, Save, Close PDF" />
        <TaskHeader dark task="If Encor, Complete BOM, Upload to BOM Folder " />
        <PvSubTask task="https://drive.google.com/drive/folders/1RzXsQPnHIx1zSnx996RKXNPjV-cGo1yE" />
        <Task
          dark
          task="Put PDF into customer folder, Upload folder to Drive"
        />
        <Task task="Upload PDF to Phoenix, Mark CAD Complete" />
        <Task dark task="Drag customer folder in Month folder on desktop" />
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

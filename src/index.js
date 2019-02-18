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

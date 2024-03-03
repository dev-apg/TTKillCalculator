import { useReducer } from 'react'
import { OneContext, TwoContext, ThreeContext } from './Contexts';
import def from './def';

function AllContexts({ children }) {

  function total(state) {
    const {
      attacks,
      attackProfiles,
      attackProfileIndex,
      bs,
      strength,
      toughness,
      ap,
      save,
      saveProfiles,
      saveProfileIndex
    } = state;

    const attackProf = attackProfiles[attackProfileIndex].name;
    console.log(attackProfiles[attackProfileIndex].name)
    const invul = doWeHaveInvul(saveProfiles[saveProfileIndex].name);
    const probOfHitting = ((7 - bs) / 6);
    const probOfWounding = ((7 - (svt(strength, toughness))) / 6);
    const targetSave = invul ? save : save - ap;
    const probOfSaving = ((7 - targetSave) / 6);

    let hits = attacks * probOfHitting;
    console.log({ hits });
    hits += addSusHits(attacks, attackProf);
    console.log({ hitsPlusSus: hits })
    const wounds = hits * probOfWounding;
    console.log({ wounds })
    const failedSaves = wounds * probOfSaving;
    console.log({ failedSaves })
    return failedSaves;
  }

  function doWeHaveInvul(saveProfile) {
    console.log(saveProfile)
    return saveProfile === '[invul]';
  }

  function addSusHits(attacks, attackProf) {
    switch (attackProf) {
      case '[sus 1]':
        return Math.floor(attacks / 6);
      case '[sus 2]':
        return Math.floor(attacks / 6) * 2;
      default:
        return 0;
    }
  }

  function boundaryCheck(num, min, max) {

    if (num <= min) return min;
    if (num >= max) return max;

    return num;

  }

  function svt(s, t) {
    // strength doubles or greater than doubles toughness
    if (s >= (t * 2)) {
      return 2;
      // strength half or less than half of toughnes
    } else if ((s * 2) <= t) {
      return 6;
    } else if (s === t) {
      return 4;
    } else if (s > t) {
      return 3;
    } else if (s < t) {
      return 5;
    }

  }

  function reducer(state, action) {
    switch (action.type) {
      case 'update_attack_profile': {
        let next = action.payload.index + 1;
        const max = action.payload.array.length;
        next = next >= max ? 0 : next;
        let newState = { ...state, attackProfileIndex: next };
        return { ...newState, total: total(newState) }
      }
      case 'update_attacks': {
        const max = 100;
        const min = 0;
        let newNum = state.attacks + parseInt(action.payload);
        newNum = boundaryCheck(newNum, min, max);
        let newState = { ...state, attacks: newNum }
        return { ...newState, total: total(newState) }
      }
      case 'update_bs': {
        let newNum = state.bs + parseInt(action.payload)
        newNum = boundaryCheck(newNum, 2, 6);
        let newState = { ...state, bs: newNum }
        return { ...newState, total: total(newState) }
      }
      case 'update_ap': {
        let newNum = state.ap + parseInt(action.payload)
        newNum = boundaryCheck(newNum, -5, 0);
        let newState = { ...state, ap: newNum }
        return { ...newState, total: total(newState) }
      }
      case 'update_strength': {
        let newNum = state.strength + parseInt(action.payload)
        newNum = boundaryCheck(newNum, 1, 10);
        let newState = { ...state, strength: newNum }
        return { ...newState, total: total(newState) }
      }
      case 'update_toughness': {
        let newNum = state.toughness + parseInt(action.payload)
        newNum = boundaryCheck(newNum, 1, 10);
        let newState = { ...state, toughness: newNum }
        return { ...newState, total: total(newState) }
      }
      case 'update_save_profile': {
        console.log({ now: action.payload.index })
        let next = action.payload.index + 1;
        console.log({ next });
        const max = action.payload.array.length;
        next = next >= max ? 0 : next;
        let newState = { ...state, saveProfileIndex: next };
        return { ...newState, total: total(newState) }
      }
      case 'update_save': {
        let newNum = state.save + parseInt(action.payload)
        newNum = boundaryCheck(newNum, 2, 6);
        let newState = { ...state, save: newNum };
        return { ...newState, total: total(newState) }
      }
      case 'update_fnp': {
        let newIndex = state.fnp + parseInt(action.payload)
        newIndex = boundaryCheck(newIndex, 4, 6);
        let newState = { ...state, fnp_index: newIndex }
        return { ...newState, total: total(newState) }
      }
      case 'update_fnp_active': {
        console.log(action.payload)
        const active = action.payload ? false : true;
        let newState = { ...state, fnp_active: active };
        return { ...newState, total: total(newState) }
      }

      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }


  const [stateOne, dispatchOne] = useReducer(reducer, def);
  const [stateTwo, dispatchTwo] = useReducer(reducer, def);
  const [stateThree, dispatchThree] = useReducer(reducer, def);

  return (
    <>
      <OneContext.Provider value={{ values: stateOne, dispatch: dispatchOne }}>
        <TwoContext.Provider value={{ values: stateTwo, dispatch: dispatchTwo }}>
          <ThreeContext.Provider value={{ values: stateThree, dispatch: dispatchThree }}>
            {children}
          </ThreeContext.Provider>
        </TwoContext.Provider>
      </OneContext.Provider>
    </>
  )
}

export default AllContexts

import Basic from "./stats/Basic";
import Multi from "./stats/Multi";
import FNP from "./stats/FNP"

function Page({ state }) {
  console.log(state.values)

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
    saveProfileIndex,
    fnp,
    fnp_active
  } = state.values;
  const { dispatch } = state;

  return (
    <div>
      <span>Target</span>
      <Basic
        title={'Tough'}
        value={toughness}
        actionType={'update_toughness'}
        dispatch={dispatch}
      />
      <Multi
        title={'Save'}
        value={`${save}+`}
        actionType={'update_save'}
        dispatch={dispatch}
        profileArray={saveProfiles}
        profileIndex={saveProfileIndex}
        profileActionType={'update_save_profile'}
      />
      <FNP
       title={'FNP'}
       value={`${fnp}+`}
       actionType={'update_fnp'}
       dispatch={dispatch}
       profileActionType={'update_fnp_active'}
       active={fnp_active}
      />
      <span>Weapon</span>
      <Multi
        title={'Attacks'}
        value={attacks}
        actionType={'update_attacks'}
        dispatch={dispatch}
        profileArray={attackProfiles}
        profileIndex={attackProfileIndex}
        profileActionType={'update_attack_profile'}
      />
      <Basic
        title={'BS'}
        value={`${bs}+`}
        actionType={'update_bs'}
        dispatch={dispatch}
      />
      <Basic
        title={'Strength'}
        value={strength}
        actionType={'update_strength'}
        dispatch={dispatch}
      />
      <Basic
        title={'AP'}
        value={ap}
        actionType={'update_ap'}
        dispatch={dispatch}
      />
    </div>
  )
}

export default Page
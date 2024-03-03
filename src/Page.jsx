import Basic from "./stats/Basic";
import Multi from "./stats/Multi";

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
    saveProfileIndex
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
      <Basic
       title={'FNP'}
       value={`${bs}+`}
       actionType={'update_bs'}
       dispatch={dispatch}
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
# Running this in Expo Snack

## For the interviewer — one-time setup

1. Open https://snack.expo.dev in a browser (Chrome/Edge/Firefox).
2. In the left sidebar, delete all default files.
3. Copy in every file from this repo, preserving the folder structure. Snack lets you create nested folders — the paths matter (`src/screens/pokemonDetail/components/InfoCard.tsx` must be exactly that).
4. Open `package.json` (Snack shows it in the sidebar under "Dependencies") and make sure every dep listed in *our* `package.json` is added. Snack will auto-detect most imports but the following usually need to be added by hand:
   - `@reduxjs/toolkit`
   - `redux-saga`
   - `react-redux`
   - `react-native-paper`
   - `@react-navigation/native`
   - `@react-navigation/native-stack`
   - `@react-native-async-storage/async-storage`
   - `react-native-safe-area-context`
   - `react-native-screens`
   - `react-native-gesture-handler`
5. Set `App.tsx` as the entry point (top-of-file, "My Device / Preview" panel — Snack usually finds it automatically).
6. Wait for the bundle to build. When the green dot appears in the preview panel, the app is running.
7. **Save the snack** with a name like `pokedex-challenge-master`. Get the URL — this is your master copy.

## Sharing with a candidate

Send the URL. When the candidate clicks it, Snack loads a read-only view — they hit **"Save as a copy"** in the top-right, which forks it into their own workspace. Their edits don't affect your master copy.

If you want each candidate to get a fresh copy without them having to click "Save as a copy":

- Give them the URL with `?copy=1` appended.
- Or, before each interview, open your master, save as a copy, and share that copy's URL.

## Picking the challenge subset

Before the interview:

1. Decide which bug (and optionally which feature) you want the candidate to work on. See `.interviewer/README.md` for the mapping.
2. Edit `README.md` in the candidate's fork to leave only the bug + feature you chose. Or leave all three visible and just verbally tell the candidate at the start ("For this interview, focus on Bug 2 and Feature A").
3. Either approach works. Deleting the others prevents them from stumbling into fixing something you didn't intend to grade.

## Simulator tips

- The **reload button** (circular arrow in the preview panel) restarts the JS bundle — use it to test Bug 3's initial-load, or Feature B's persistence.
- **iOS / Android / Web** tabs at the top of the preview switch platforms. iOS is the most reliable — use that for the interview.
- Console output shows at the bottom of the Snack window. Redux errors and PokeAPI failures land there.
- If PokeAPI is being slow (rare), the detail screen fetch will take a couple of seconds. That's fine — Feature A's ViewModel should show a loading state.

## Troubleshooting

- **Blank screen on first load:** usually a missing dep. Open Snack's console and look for "unable to resolve module".
- **"react-native-paper doesn't wrap in PaperProvider":** check that `App.tsx` still has the `<PaperProvider theme={MD3LightTheme}>` wrapper.
- **Navigation errors on first tap:** `react-native-screens` sometimes needs a manual save/reload after being added.

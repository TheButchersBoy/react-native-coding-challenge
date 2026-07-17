# Pokedex — Coding Challenge

Welcome, and thanks for taking the time. This is a small React Native app: a scrollable Pokedex list, a detail screen, and a favorites list. It uses **Redux Toolkit + redux-saga** for state and **react-native-paper** for UI. Every screen follows an **MVVM** convention (see below).

You'll spend about **an hour** on this. Your interviewer will pick **one bug** for you to fix, or **one bug + one feature** to build. You don't need to do all of them — they're listed here so you can see the shape of the codebase.

---

## Getting started

This is designed to run in **Expo Snack** (https://snack.expo.dev). Your interviewer has already set up the Snack for you and shared the link. Just open it — you'll see the iOS simulator running on the right.

If for some reason you need to import it yourself, follow the steps in **SNACK.md** in this repo.

**No local setup, no simulators to install, no test runner to configure.** You verify your work by looking at the app in the simulator.

---

## Project shape

```
App.tsx                          # Providers: Redux, Paper theme, strings context, navigator
src/
  context/                       # Localized strings — accessed via useStringsContext()
  constants/routeNames.ts
  imports.ts                     # Barrel for cross-cutting imports
  navigation/
    NavigationViewModel.ts       # useStackNavigation typed against the stack
    RootNavigator.tsx
  services/
    pokemonService.ts            # Local catalog + a real fetch to https://pokeapi.co
  store/
    index.ts                     # configureStore + typed useAppDispatch / useAppSelector
    sagas.ts
    pokemon/
      pokemonSlice.ts
      pokemonSaga.ts
      types.ts
  screens/
    pokemonList/                 # MVVM triple: View / ViewModel / Model / Style
    pokemonDetail/               # Same triple + a components/ folder for the InfoCard tree
    favorites/
```

### The MVVM convention

Every screen is a set of four files:

| File               | Job                                                                                     |
|--------------------|-----------------------------------------------------------------------------------------|
| `FooView.tsx`      | Pure render. No local state, no effects, no `dispatch`. Reads everything from the VM.   |
| `FooViewModel.ts`  | A hook that returns everything the View needs: state, callbacks, derived data, styles. |
| `FooModel.ts`      | Types for the screen.                                                                   |
| `FooStyle.ts`      | `createFooStyles()` factory called from the VM (memoized).                              |

**Where does new logic go?** In the ViewModel. Views should stay dumb.

---

## The bugs (your interviewer will pick one)

### Bug 1 — Can't unfavorite the very first pokemon you favorited

Add a pokemon to favorites, then try to remove it from the detail screen. If it's the only pokemon in your favorites, it can't be unfavorited. If you favorite it, then favorite a second one, then go back and try to unfavorite the first — it won't work.

### Bug 2 — Search results sometimes show the wrong pokemon

Search for `pika` in the list. Then quickly clear the input and type `char`. Depending on timing, you may see the `pika…` results *after* the `char…` results have already come back — the older response overwrites the newer one.

### Bug 3 — Search doesn't do anything

Type in the search box. Nothing filters. Everything you type stays visible in the input, but the list never updates from the initial load.

---

## The features (your interviewer will pick one, if any)

### Feature A — Render each pokemon's real types on the detail screen

The pokemon detail screen has a **placeholder chip** on it that reads "types coming soon". Replace it with the real types (fire, water, grass, poison, etc) for the current pokemon, rendered as chips.

Types come from the PokeAPI detail endpoint. The service function is already written for you — it's `fetchPokemonDetail(id)` in `src/services/pokemonService.ts`. It returns `{ id, name, types, stats, height, weight }`.

The placeholder chip lives in a component called `StatChipRow`. Take a look at where it sits in the render tree before you decide how to get the types to it.

### Feature B — Persist favorites across app reloads

Favorites live in Redux and disappear when the app reloads (hit "reload" in the Snack toolbar to see this). Wire them up so they survive a reload.

You've got `@react-native-async-storage/async-storage` installed. How you use it is up to you.

Constraint: **no View or ViewModel should know that persistence exists.** They should keep talking to Redux exactly the way they do today.

### Feature C — Sort & filter toolbar on the list

Add a small toolbar to the list letting the user:

- Sort by *id* (default), *name A→Z*, or *name Z→A*.
- Filter to "favorites only".

Sort/filter state should live in the Redux store, not in local component state — if the user opens the app tomorrow, they should land on their last-used sort/filter.

---

## What we're looking for

Roughly, in order:

1. **The bug is actually fixed / the feature actually works.** Verify it in the simulator.
2. **You put things in the right layer.** MVVM discipline — no `dispatch` in a View, no persistence in a ViewModel, no rendering logic in a reducer.
3. **You don't over-reach.** If the fix is one line, it's one line. Don't refactor the whole app "while you're here".
4. **You can explain what you did.** We'll ask.

Ask questions freely. Getting stuck is fine — say so and we'll help you get moving.

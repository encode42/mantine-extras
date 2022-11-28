# 5.0.2
### Changed
- Moved some `peerDependencies` back to `dependencies`.

# 5.0.1
### Changed
- Fully switched tooling to `pnpm`.
- Loosened up `dependencies` and `peerDependencies` version ranges.

# 5.0.0
### Added
- Started work on `MDX` component.
- The `DeleteButton` component.
- The `HoverDate` component.
- The `Indicator` component.

### Changed
- Switched tooling to `pnpm`.
- Moved some dependencies to `peerDependencies`.

### Removed
- All previously polymorphic components are no longer polymorphic.
- Moved many of the utility methods into their own package, `@encode42/node-extras`.
  - `arrayify`
  - `saveText`
  - `save`
  - `toArrayBuffer`
  - `Class`
  - `Optional`

# 4.1.3
### Changed
- Updated all dependencies.

# 4.1.2
### Changed
- Forced `id` prop to exist on `ThemePaper`.
- Updated all dependencies.

### Added
- The `ThemePaperProps` interface.

# 4.1.1
### Changed
- Updated all dependencies
- Improved documentation

# 4.1.0
### Fixed
- The `Social` component using the incorrect variant.

### Added
- The `grow` property on the `Slider` component.

# 4.0.1
### Changed
- Exported the `CaptionWrapperProps` and `VideoGroupProps` files.
- Depended on required `@emotion` packages.

# 4.0.0
### Added
- The `Caption.Wrapper` component.
- The `Video.Group` component.
- The `SharedCaptionProps` component.
- The `SharedVideoProps` component.

### Changed
- Updated to Mantine 5.0.0.
  - All components that used generics (`Caption`, `Button`, etc.) have been changed to use polymorphic components.
- Updated Tabler Icons.
- Updated `ErrorPage` to use `Stack` rather than `Group direction="column"`.

### Removed
- The `CaptionWrapper` component export.
- The `VideoGroup` component export.

# 3.6.0
### Added
- The `videoProps` property for the `Video` component.

### Changed
- The `Video` component props now extend `BoxProps` instead of `ReactVideoProps`.
- The `Video` component no longer lazy-loads by default.
- The `VideoGroup` component now uses `100%` of the available width.

### Removed
- The `boxProps` property from the `Video` component.


# 3.5.0
### Changed
- The `TOSModal` component now has deny/accept buttons.
- The `TOSPage` component now uses disclosure rather than state.

# 3.4.0
### Changed
- Moved all `util.ts` functions to their own files, exported from `util.ts`.
- Use `ynpx` instead of `npx`.

### Added
- The `Button` component.
- Vertical divider between `statusCode` and `title` of `ErrorPage`.
- The `Group` component.
- The `ThemeToggle` component.
- The `SxOperations` interface.

### Removed
- Removed `index.ts` from `util/` subdirectories.

# 3.3.0
### Fixed
- `Social#iconProps` and `Social#actionIconProps` not being optional.
- `Video#config` and `Video#boxProps` not being optional.

### Removed
- Temporarily removed the `MDX` component.

# 3.2.1
### Changed
- Renamed `ErrorProps` to `ErrorPageProps`.

# 3.2.0
### Fixed
- `SocialProps#iconProps` and `SocialProps#actionIconProps` not being optional.

### Changed
- Renamed the `Error` component to `ErrorPage`.

### Added
- The `util#toArrayBuffer` function.

# 3.1.0
### Changed
- Target has been changed to `ES2021` from `ES2015`.

### Added
- `Class` type.

# 3.0.0
This is the first officially-supported version of `mantine-extras`. Versions `1.0.0` through `2.0.3` were vital steps towards this release.

In hindsight, I should've started from version `0.0.1`.

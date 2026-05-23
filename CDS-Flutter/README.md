# CDS Flutter Token Package

Dart token library for Curt's Design System. Provides compile-time constants for every color, spacing, radius, typography, and shadow token.

## Setup

Add to your app's `pubspec.yaml`:

```yaml
dependencies:
  cds:
    path: ../CDS-Flutter  # adjust path as needed
```

Then run:

```bash
flutter pub get
```

## Usage

```dart
import 'package:cds/cds.dart';

// Colors
Container(color: CDSColors.brand)
Container(color: CDSColors.background)

// Spacing
SizedBox(height: CDSSpacing.md)
Padding(padding: EdgeInsets.all(CDSSpacing.lg))

// Radius
ClipRRect(borderRadius: CDSRadius.brMd)

// Typography
Text('Hello', style: CDSTypography.body)
Text('Title', style: CDSTypography.title)

// Shadows
DecoratedBox(decoration: BoxDecoration(boxShadow: CDSShadows.bottomC))
```

## Customising

1. Open `lib/tokens/cds_colors.dart` and replace `_Palette.brand` and `_Palette.darkSurface` with your brand colors.
2. Open `lib/tokens/cds_typography.dart` and replace `'YourFont'` with your chosen font family. Register the font in `pubspec.yaml`.
3. Run `flutter pub get` and you're done - all tokens cascade automatically.

## Token files

| File | Class | What it contains |
|------|-------|-----------------|
| `cds_colors.dart` | `CDSColors` | All semantic color tokens |
| `cds_spacing.dart` | `CDSSpacing` | xs(4) through xl5(48) in logical pixels |
| `cds_radius.dart` | `CDSRadius` | sm(6) through full(999), as doubles, Radius, and BorderRadius |
| `cds_typography.dart` | `CDSTypography` | supporting/body/bodyBold/section/title/hero TextStyles |
| `cds_shadows.dart` | `CDSShadows` | bottomA-D, topA-D, sideNav, tilesActive, tilesHover |

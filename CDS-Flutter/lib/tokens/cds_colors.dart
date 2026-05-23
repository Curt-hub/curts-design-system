import 'package:flutter/painting.dart';

// Two-tier token system — palette feeds semantic tokens.
// Only reference CDSColors in components, never raw hex.

abstract class _Palette {
  // TODO: set your brand color
  static const Color brand = Color(0xFF000000);
  // TODO: set your dark surface color (nav, hero backgrounds)
  static const Color darkSurface = Color(0xFF111111);

  static const Color black    = Color(0xFF000000);
  static const Color offBlack = Color(0xFF595959);
  static const Color greyA    = Color(0xFFAAACB0);
  static const Color greyC    = Color(0xFFCDCED0);
  static const Color greyD    = Color(0xFFDDDDDF);
  static const Color greyE    = Color(0xFFEFF0F0);
  static const Color greyF    = Color(0xFFF7F7F8);
  static const Color white    = Color(0xFFFFFFFF);
  static const Color green    = Color(0xFF16C172);
  static const Color red      = Color(0xFFF03A47);
  static const Color blue     = Color(0xFF045DEC);
  static const Color yellow   = Color(0xFFE9D502);
}

abstract class CDSColors {
  // Brand - TODO: update once brand color is set in tokens
  static const Color brand       = _Palette.brand;
  static const Color brandSubtle = Color(0xFFF0F0F0); // TODO: set brand subtle tint

  // Backgrounds
  static const Color background         = _Palette.white;
  static const Color backgroundElevated = _Palette.greyF;
  static const Color backgroundSunken   = Color(0xFFF9F9FC);
  static const Color backgroundDark     = _Palette.darkSurface; // invariant

  // Text & icon colours
  static const Color onBackground          = _Palette.black;
  static const Color onBackgroundSecondary = _Palette.offBlack;
  static const Color onBackgroundTertiary  = _Palette.greyA;

  // Borders & dividers
  static const Color outline       = _Palette.greyC;
  static const Color outlineSubtle = _Palette.greyE;

  // Misc
  static const Color loaderTrack = _Palette.greyD;

  // Status
  static const Color success       = _Palette.green;
  static const Color successSubtle = Color(0xFFE8F5E9);
  static const Color successStrong = Color(0xFF4CAF50);

  // rgba(240,58,71,0.12) — alpha 0x1F = round(0.12 * 255)
  static const Color error       = _Palette.red;
  static const Color errorSubtle = Color(0x1FF03A47);

  static const Color warning       = _Palette.yellow;
  static const Color warningSubtle = Color(0xFFFEFBE6);

  // rgba(4,93,236,0.12)
  static const Color info       = _Palette.blue;
  static const Color infoSubtle = Color(0x1F045DEC);
}

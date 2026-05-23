import 'package:flutter/painting.dart';

abstract class CDSShadows {
  static const List<BoxShadow> bottomA = [
    BoxShadow(color: Color(0x08000000), blurRadius: 2, offset: Offset(0, 2)),
  ];

  static const List<BoxShadow> bottomB = [
    BoxShadow(color: Color(0x0F000000), blurRadius: 2, offset: Offset(0, 2)),
  ];

  static const List<BoxShadow> bottomC = [
    BoxShadow(color: Color(0x0D000000), blurRadius: 10, offset: Offset(0, 2)),
  ];

  static const List<BoxShadow> bottomD = [
    BoxShadow(color: Color(0x1A000000), blurRadius: 15, offset: Offset(0, 2)),
  ];

  static const List<BoxShadow> topA = [
    BoxShadow(color: Color(0x08000000), blurRadius: 2, offset: Offset(0, -2)),
  ];

  static const List<BoxShadow> topB = [
    BoxShadow(color: Color(0x0F000000), blurRadius: 2, offset: Offset(0, -2)),
  ];

  static const List<BoxShadow> topC = [
    BoxShadow(color: Color(0x1A000000), blurRadius: 2, offset: Offset(0, -2)),
  ];

  static const List<BoxShadow> topD = [
    BoxShadow(color: Color(0x1A000000), blurRadius: 15, offset: Offset(0, -2)),
  ];

  static const List<BoxShadow> sideNav = [
    BoxShadow(color: Color(0x33000000), blurRadius: 15, offset: Offset(4, 0)),
  ];

  static const List<BoxShadow> tilesActive = [
    BoxShadow(color: Color(0x1A000000), blurRadius: 15, spreadRadius: -3, offset: Offset(0, 10)),
  ];

  // TODO: update tilesHover with brand-colored shadow once brand color is set
  static const List<BoxShadow> tilesHover = [
    BoxShadow(color: Color(0x33000000), blurRadius: 15, spreadRadius: -3, offset: Offset(0, 10)),
  ];
}

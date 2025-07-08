# Assets Directory Structure

This directory contains all the static assets needed for the AESI landing page.

## 📁 Directory Structure

```
src/assets/
├── icons/
│   ├── category/           # Category badge icons
│   │   ├── salud.svg      # Health category icon (green)
│   │   ├── desarrollo.svg # Development category icon (blue)
│   │   └── vivienda.svg   # Housing category icon (yellow)
│   ├── metrics/           # Metric/statistic icons
│   │   ├── people.svg     # People/families icon
│   │   ├── business.svg   # Business/entrepreneur icon
│   │   ├── health-center.svg # Health center icon
│   │   └── house.svg      # House/construction icon
│   └── programs/          # Main program illustration icons
│       ├── salud-main.svg     # Main health program illustration
│       ├── desarrollo-main.svg # Main development program illustration
│       └── vivienda-main.svg   # Main housing program illustration
└── images/
    └── programs/          # Program photos
        ├── salud-para-todos.jpg
        ├── emprendimiento-social.jpg
        └── vivienda-digna.jpg
```

## 🎨 Icon Requirements

### Category Icons (16x16px)
- **salud.svg**: Medical cross, stethoscope, or health symbol
- **desarrollo.svg**: Growth chart, lightbulb, or development symbol  
- **vivienda.svg**: House, building, or construction symbol

### Metric Icons (16x16px)
- **people.svg**: Person or group of people silhouette
- **business.svg**: Briefcase, store, or business symbol
- **health-center.svg**: Hospital building or medical facility
- **house.svg**: House outline or home symbol

### Program Illustrations (80x80px)
- **salud-main.svg**: Large health program illustration
- **desarrollo-main.svg**: Large development program illustration
- **vivienda-main.svg**: Large housing program illustration

## 📸 Image Requirements

### Program Photos
- **Dimensions**: 400x240px (aspect ratio 5:3)
- **Format**: JPG or WebP
- **Content**: Real photos of program activities
- **Quality**: High resolution, good lighting

## 🔍 Usage

These assets are referenced in:
- `ProgramCard` component for category badges and main illustrations
- `programsData.ts` for metric icons and program photos
- CSS for proper sizing and positioning

## 📝 Notes

- All SVG icons should be optimized for web
- Use consistent stroke width and style across icon sets
- Category colors: Salud (#22c55e), Desarrollo (#3b82f6), Vivienda (#eab308)
- Images should be optimized for web (compressed but high quality) 
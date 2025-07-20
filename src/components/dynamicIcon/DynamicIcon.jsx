import {ICON_MAP} from './iconMap';

function DynamicIcon({ icon, size, color  }) {
    const IconComponent = ICON_MAP[icon];
    return IconComponent ? <IconComponent size={size} color={color} /> : null;
  }

  export default DynamicIcon;
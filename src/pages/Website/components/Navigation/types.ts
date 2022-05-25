export interface MenuSubEntry {
  label: string;
  href: string;
  calloutClass?: string;
}

export interface MenuEntry {
  label: string;
  items?: MenuSubEntry[];
  href?: string;
  calloutClass?: string;
  initialOpenState?: boolean;
  type?: string
}

export interface PanelProps {
  links: Array<MenuEntry>;
}

export interface PushedProps {
  isPushed: boolean;
  pushNav: (isPushed: boolean) => void;
}
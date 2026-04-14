// Starlink Mini · i18n
// Vanilla, dependency-free. Loaded before app.js.

(() => {
  "use strict";

  const EN = {
    "meta.title": "Starlink Mini · Dashboard",

    "brand.title": "Starlink Mini",
    "brand.sub": "Dashboard",
    "conn.dish": "Starlink dish",
    "conn.router": "Starlink router",
    "conn.dish_label": "Dish",
    "conn.router_label": "Router",
    "lang.label": "Language",
    "lang.en": "🇬🇧",
    "lang.nb": "🇳🇴",
    "lang.en_option": "🇬🇧 English",
    "lang.nb_option": "🇳🇴 Norsk",

    "a11y.skip_to_content": "Skip to main content",
    "a11y.reconnect_dish": "Reconnect dish",
    "a11y.reconnect_router": "Reconnect router",
    "a11y.conn_state.connected": "connected",
    "a11y.conn_state.disconnected": "disconnected",
    "a11y.conn_state.unknown": "unknown",

    "nav.sections": "Sections",
    "tabs.telemetry": "Telemetry",
    "tabs.history": "History",
    "tabs.router": "Router",
    "tabs.config": "Configuration",
    "tabs.actions": "Actions",
    "tabs.advanced": "Advanced",

    "toolbar.live_refresh": "Live refresh",
    "toolbar.refresh_now": "Refresh now",
    "toolbar.reload": "Reload",

    "card.throughput": "Throughput",
    "card.dish_status": "Dish Status",
    "card.gps": "GPS & Location",
    "card.alignment": "Alignment",
    "card.signal": "Signal & Ready States",
    "card.obstruction": "Obstruction Map",
    "card.device_info": "Device Info",
    "card.connected_routers": "Connected Routers",
    "card.power_draw": "Power Draw",
    "card.throughput_history": "Throughput History",
    "card.outages": "Outages",
    "card.event_log": "Event Log",
    "card.snow_melt": "Snow Melt",
    "card.power_save": "Power Save Schedule",
    "card.dish_level": "Dish Level",
    "card.software_updates": "Software Updates",
    "card.location_reporting": "Location Reporting",
    "card.asset_class": "Asset Class",
    "card.raw_config": "Raw Configuration",
    "card.reboot_dish": "Reboot Dish",
    "card.ping_test": "Ping Test",
    "card.export_dump": "Export Full Dump",
    "card.raw_grpc": "Raw gRPC Request",
    "card.grpc_services": "gRPC Services",
    "card.request_fields": "Request Fields",
    "card.diagnostics": "Diagnostics",
    "card.router_status": "Router Status",
    "card.wifi_clients": "WiFi Clients",
    "card.wifi_networks": "WiFi Networks",
    "card.radio_stats": "Radio Stats",
    "card.self_test": "Self-test",
    "card.network_interfaces": "Network Interfaces",

    "tp.download": "Download",
    "tp.upload": "Upload",
    "tp.dl_max": "DL max",
    "tp.dl_avg": "DL avg",
    "tp.ul_max": "UL max",
    "tp.ul_avg": "UL avg",
    "tp.hist_aria": "Throughput history: download and upload over time",

    "kv.latency": "Latency",
    "kv.drop_rate": "Drop rate",
    "kv.snr": "SNR",
    "kv.uptime": "Uptime",
    "kv.min": "Min",
    "kv.max": "Max",
    "kv.avg": "Avg",
    "kv.window": "Window",
    "kv.starts": "Starts",
    "kv.ends": "Ends",
    "kv.duration": "Duration",
    "kv.state": "State",
    "kv.disablement": "Disablement",
    "kv.mobility_class": "Mobility class",
    "kv.class_of_service": "Class of service",
    "kv.software_update": "Software update",
    "kv.ethernet_speed": "Ethernet speed",
    "kv.self_test": "Self-test",
    "kv.snr_above_floor": "SNR above floor",
    "kv.gps_valid": "GPS valid",
    "kv.satellites": "Satellites",
    "kv.tilt": "Tilt",
    "kv.azimuth": "Azimuth",
    "kv.elevation": "Elevation",
    "kv.uncertainty": "Uncertainty",
    "kv.delta_azimuth": "Δ Azimuth",
    "kv.delta_elevation": "Δ Elevation",
    "kv.alignment": "Alignment",
    "kv.id": "ID",
    "kv.hardware": "Hardware",
    "kv.software": "Software",
    "kv.country": "Country",
    "kv.boot_count": "Boot count",
    "kv.generation": "Generation",
    "kv.latitude": "Latitude",
    "kv.longitude": "Longitude",
    "kv.altitude": "Altitude",
    "kv.source": "Source",
    "kv.accuracy_sigma": "Accuracy σ",
    "kv.horizontal_speed": "Horizontal speed",
    "kv.vertical_speed": "Vertical speed",
    "kv.ping_to_dish": "Ping to dish",
    "kv.ping_to_pop": "Ping to Point of Presence",
    "kv.ping_wan": "Ping (WAN)",
    "kv.router_id": "Router ID",
    "kv.dish_cohoused": "Dish cohoused",
    "kv.ipv4_wan": "IPv4 WAN",
    "kv.ipv6_wan": "IPv6 WAN",
    "kv.dhcp_leases": "DHCP leases",
    "kv.active_alerts": "Active alerts",

    "maps.open": "Open in Google Maps ↗",
    "maps.open_osm": "Open in OpenStreetMap ↗",
    "align.sky_view": "Dish sky view",
    "align.compass_view": "Dish compass view",
    "align.current_boresight": "Current boresight",
    "align.desired_target": "Desired target",
    "align.converged": "CONVERGED",
    "align.switch_to_compass": "Compass view",
    "align.switch_to_sky": "Sky view",
    "align.help": "The alignment filter shows CONVERGED once the dish has a confident fix on its pointing direction. Other states (such as INITIALIZING or RESETTING) mean the estimate is still stabilising after boot, movement, or GPS loss — readings may be noisy until it converges.",

    "obs.aria": "Obstruction map",
    "obs.clear": "clear",
    "obs.partial": "partial",
    "obs.blocked": "blocked",

    "config.readonly": "Read-only — the LAN gRPC endpoint rejects writes with PERMISSION_DENIED. Change settings from the Starlink mobile app.",
    "config.snow_loading": "Loading current setting…",
    "config.snow_unknown_desc": "Current snow-melt behaviour is not reported by the dish.",
    "config.snow_not_set": "Not set",
    "config.level_default_label": "Default",
    "config.level_default_desc": "Dish uses its default orientation (tilt follows bracket).",
    "config.loc_unknown_desc": "Unknown location reporting mode.",
    "config.swu.reboot_window_desc": "Reboot window for applying firmware updates",
    "config.swu.three_day": "Three-day deferral",
    "config.swu.hour_utc": "{h}:00 UTC",
    "swu.state.tooltip": "Current firmware update state reported by the dish. IDLE = up to date. DOWNLOADING/FETCHING/VERIFYING/STAGED = new firmware being prepared. REBOOT_REQUIRED = update ready; the dish will apply it at the next reboot window (or reboot the dish manually to apply now).",
    "swu.state.idle": "Up to date",
    "swu.state.disabled": "Updates disabled",
    "swu.state.downloading": "Downloading update",
    "swu.state.fetching": "Fetching update",
    "swu.state.verifying": "Verifying update",
    "swu.state.staged": "Update staged",
    "swu.state.reboot_required": "Reboot required",
    "swu.state.failed": "Update failed",
    "config.asset_desc": "Internal hardware-family identifier reported by the dish firmware (tied to the dish model, not your subscription plan)",
    "config.asset_class": "Class {n}",
    "config.failed_load": "Failed to load",
    "config.unknown_error": "Unknown error",
    "config.ps.active": "ACTIVE",
    "config.ps.disabled": "DISABLED",
    "config.ps.not_set": "NOT SET",
    "config.ps.enabled_label": "Enabled",
    "config.ps.disabled_label": "Disabled",
    "config.ps.not_configured": "Not configured",
    "config.ps.now_title": "Now: {time}",

    "snow.auto.label": "Automatic",
    "snow.auto.desc": "Heater activates automatically when ice is detected.",
    "snow.auto.pill": "AUTO",
    "snow.on.label": "Pre-heat",
    "snow.on.desc": "Heater runs continuously to prevent ice and snow buildup.",
    "snow.on.pill": "ON",
    "snow.off.label": "Off",
    "snow.off.desc": "Snow melting is disabled. The dish will not heat itself.",
    "snow.off.pill": "OFF",
    "snow.heating_now": "Heating now",

    "level.tilt.label": "Tilt like normal",
    "level.tilt.desc": "Dish follows the mounting bracket's natural tilt.",
    "level.force.label": "Force level",
    "level.force.desc": "Dish is forced to horizontal alignment regardless of bracket.",

    "loc.local.label": "Local only",
    "loc.local.desc": "Location is exposed over the LAN API only, not reported upstream.",
    "loc.remote.label": "Remote",
    "loc.remote.desc": "Location is reported to Starlink for remote management.",

    "raw.show": "Show full JSON",

    "actions.reboot_desc": "Restarts the dish. Connectivity drops for ~90 seconds.",
    "actions.reboot_btn": "Reboot Dish",
    "actions.ping_desc": "ICMP echo to 192.168.100.1 (5 packets).",
    "actions.ping_run": "Run ping",
    "actions.export_desc": "Downloads all telemetry and config as JSON.",
    "actions.export_btn": "Download JSON",

    "advanced.whitelisted": "Whitelisted keys only",
    "advanced.request_key": "Request key",
    "advanced.request_key_ph": "e.g. getStatus",
    "advanced.payload": "Payload (JSON, optional)",
    "advanced.send": "Send",
    "advanced.load": "Load",

    "modal.confirm_title": "Confirm action",
    "modal.confirm_msg": "Are you sure?",
    "modal.cancel": "Cancel",
    "modal.confirm": "Confirm",

    "confirm.reboot.title": "Reboot the dish?",
    "confirm.reboot.msg": "Connectivity will drop for ~90 seconds while the dish restarts.",
    "confirm.reboot.ok": "Reboot now",

    "toast.reboot_sent": "Reboot command sent",
    "toast.reboot_failed": "Reboot failed",
    "toast.ping_running": "Running ping…",
    "toast.ping_failed": "Ping failed",
    "toast.ping_no_output": "(no output)",
    "toast.export_downloaded": "Export downloaded",
    "toast.invalid_json": "Invalid JSON",
    "toast.dish_reconnected": "Dish reconnected",
    "toast.dish_reconnect_failed": "Dish reconnect failed",
    "toast.router_reconnected": "Router reconnected",
    "toast.router_reconnect_failed": "Router reconnect failed",
    "toast.failed": "Failed",

    "bool.yes": "Yes",
    "bool.no": "No",

    "alerts.none": "No active alerts",
    "alerts.no_alerts": "None",

    "updated": "Updated {time}",

    "pill.live": "LIVE",
    "pill.no_data": "NO DATA",
    "pill.healthy": "HEALTHY",
    "pill.alert_one": "{count} alert",
    "pill.alert_other": "{count} alerts",

    "router.controller": "Controller Router",
    "router.connected_one": "{count} connected",
    "router.connected_other": "{count} connected",
    "router.live": "live",
    "router.stale": "stale",
    "router.online": "online",

    "empty.routers.title": "No routers detected",
    "empty.routers.hint": "The dish isn't reporting any downstream routers on Ethernet.",
    "empty.clients.title": "No clients connected",
    "empty.clients.hint": "No devices are currently associated with the router.",
    "empty.wifi": "No WiFi networks configured",
    "empty.radio": "No radio data",
    "empty.selftest": "No self-test results",
    "empty.interfaces": "No interfaces reported",
    "empty.outages": "No outages recorded in the dish history window.",
    "empty.events": "No events recorded in the dish history window.",

    "wifi.hidden": "(hidden)",
    "wifi.guest": "Guest",
    "wifi.isolated": "Isolated",
    "wifi.domain": "domain {v}",
    "wifi.vlan": "VLAN {v}",
    "wifi.dhcp_lease": "DHCP lease {v}s",
    "wifi.dhcp_range": "DHCP {v}",
    "wifi.dhcp_off": "DHCP off",
    "wifi.networks_one": "{count} network",
    "wifi.networks_other": "{count} networks",
    "wifi.password_label": "Password",
    "wifi.show_password": "Show password",
    "wifi.hide_password": "Hide",
    "wifi.show_qr": "Show QR code",
    "wifi.qr_title": "Scan to connect",
    "wifi.qr_hint": "Point your phone camera at the code and tap the notification to join.",
    "wifi.copy_password": "Copy",
    "wifi.copied": "Password copied",
    "wifi.secrets_failed": "Could not fetch passwords",
    "wifi.qr_failed": "Could not generate QR code",
    "wifi.masked_note": "The router won't share this password over the LAN — enter it once to save it locally.",
    "wifi.password_placeholder": "Wi-Fi password",
    "wifi.save": "Save",
    "wifi.forget": "Forget",
    "wifi.saved": "Password saved in this browser",
    "wifi.forgotten": "Password cleared",
    "wifi.need_password": "Save the password first to generate a QR code.",

    "vault.setup_title": "Set a master password",
    "vault.setup_desc": "Your saved Wi-Fi passwords will be encrypted with this password. If you forget it, saved passwords are lost.",
    "vault.unlock_title": "Enter master password",
    "vault.unlock_desc": "Unlock the Wi-Fi password vault to continue.",
    "vault.password": "Master password",
    "vault.confirm": "Confirm password",
    "vault.min_length": "Master password must be at least 8 characters.",
    "vault.mismatch": "Passwords do not match.",
    "vault.wrong": "Wrong master password.",
    "vault.setup_btn": "Set password",
    "vault.unlock_btn": "Unlock",
    "vault.lock_title": "Lock vault",
    "vault.locked_toast": "Vault locked.",
    "vault.init_failed": "Could not initialise vault.",
    "vault.migrated_one": "Migrated {count} saved password to the vault.",
    "vault.migrated_other": "Migrated {count} saved passwords to the vault.",
    "vault.reset_link": "Forgot it? Reset vault",
    "vault.reset_title": "Reset the vault?",
    "vault.reset_msg": "This deletes every saved Wi-Fi password. This cannot be undone.",
    "vault.reset_ok": "Delete vault",
    "vault.reset_done": "Vault deleted. Set a new master password.",

    "selftest.pass": "pass",
    "selftest.fail": "fail",
    "selftest.passed": "Passed",
    "selftest.failed": "Failed",

    "kv.snr.tooltip": "Signal-to-noise ratio of the Starlink link. \"Above floor\" (✓) means the SNR is high enough for normal operation.",
    "kv.class_of_service.tooltip": "Hardware/service category reported by the dish firmware. Standard and Mini dishes report CONSUMER regardless of whether the account is on Residential, Roam or Mobile — the billing plan is not exposed over the local gRPC API. Business-class hardware reports a different value.",
    "kv.azimuth.tooltip": "Compass direction the dish is pointing, in degrees from true north (0° = N, 90° = E, 180° = S, 270° = W).",
    "ready.scp": "SCP — Satellite Control Processor. The dish's main control firmware is up and communicating with the constellation.",
    "ready.l1l2": "L1/L2 — OSI Layer 1 / Layer 2. Modem physical and data-link layers (PHY + MAC) are initialized.",
    "ready.xphy": "XPHY — High-speed phased-array baseband PHY is locked and ready.",
    "ready.aap": "AAP — Active Antenna Processor. Beamforming and element-phasing pipeline is ready.",
    "ready.rf": "RF — Radio front-end (transceiver, LNAs, PAs) is powered and calibrated.",
    "ready.cady": "CADY — Cell acquisition / timing-alignment stage. Often \"No\" in normal operation and not by itself a fault indicator.",

    "iface.mac": "mac ",
    "iface.link": "link ",
    "iface.ch": "ch ",
    "iface.rx_tx": "rx/tx ",
    "iface.up": "up",
    "iface.down": "down",
    "iface.up_count": "{up}/{total} up",

    "radio.temp": "temp",
    "radio.rx": "RX",
    "radio.tx": "TX",
    "radio.rx_pkts": "RX pkts",
    "radio.tx_pkts": "TX pkts",
    "radio.duty": "Duty",

    "clients.connected_one": "{count} connected",
    "clients.connected_other": "{count} connected",

    "time.just_now": "just now",
    "time.now": "now",
    "time.s_ago": "{n}s ago",
    "time.m_ago": "{n}m ago",
    "time.h_ago": "{n}h ago",
    "time.d_ago": "{n}d ago",
    "time.assoc": "{dur} assoc",

    "outages.count_one": "{count} recorded",
    "outages.count_other": "{count} recorded",
    "outages.sat_switch": "satellite switch",
    "outages.no_switch": "no switch",
    "events.count_one": "{count} recorded",
    "events.count_other": "{count} recorded",

    "snr.above_floor": "Above floor",
    "snr.below_floor": "Below floor",
    "snr.short": "SNR {n}",

    "units.bps": "bps",
    "units.kbps": "Kbps",
    "units.mbps": "Mbps",
    "units.gbps": "Gbps",
    "units.tbps": "Tbps",
    "units.ms": "ms",
    "units.s": "s",
    "units.db": "dB",
    "units.m": "m",
    "units.mps": "m/s",
    "units.w": "W",
    "units.mbit_s": "Mbps",
    "units.b": "B",
    "units.kb": "KB",
    "units.mb": "MB",
    "units.gb": "GB",
    "units.tb": "TB",
    "units.pct_secs": "{n}s",
    "units.power_w": "{n} W",
    "units.mbit_speed": "{n} Mbps",
    "units.eth_speed": "{n} Mbps",
    "units.h_min": "{h}h {m}m",
    "units.h": "{h}h",
    "units.min": "{m}m",
  };

  const NB = {
    "meta.title": "Starlink Mini · Dashbord",

    "brand.title": "Starlink Mini",
    "brand.sub": "Dashbord",
    "conn.dish": "Starlink-antenne",
    "conn.router": "Starlink-ruter",
    "conn.dish_label": "Antenne",
    "conn.router_label": "Ruter",
    "lang.label": "Språk",
    "lang.en": "🇬🇧",
    "lang.nb": "🇳🇴",
    "lang.en_option": "🇬🇧 English",
    "lang.nb_option": "🇳🇴 Norsk",

    "a11y.skip_to_content": "Hopp til hovedinnhold",
    "a11y.reconnect_dish": "Koble til antennen på nytt",
    "a11y.reconnect_router": "Koble til ruteren på nytt",
    "a11y.conn_state.connected": "tilkoblet",
    "a11y.conn_state.disconnected": "frakoblet",
    "a11y.conn_state.unknown": "ukjent",

    "nav.sections": "Seksjoner",
    "tabs.telemetry": "Telemetri",
    "tabs.history": "Historikk",
    "tabs.router": "Ruter",
    "tabs.config": "Konfigurasjon",
    "tabs.actions": "Handlinger",
    "tabs.advanced": "Avansert",

    "toolbar.live_refresh": "Automatisk oppdatering",
    "toolbar.refresh_now": "Oppdater nå",
    "toolbar.reload": "Last inn på nytt",

    "card.throughput": "Datagjennomstrømning",
    "card.dish_status": "Antennestatus",
    "card.gps": "GPS og posisjon",
    "card.alignment": "Innretting",
    "card.signal": "Signal og klartilstander",
    "card.obstruction": "Hindringskart",
    "card.device_info": "Enhetsinformasjon",
    "card.connected_routers": "Tilkoblede rutere",
    "card.power_draw": "Strømforbruk",
    "card.throughput_history": "Datagjennomstrømningshistorikk",
    "card.outages": "Utfall",
    "card.event_log": "Hendelseslogg",
    "card.snow_melt": "Snøsmelting",
    "card.power_save": "Strømsparingsplan",
    "card.dish_level": "Antennenivå",
    "card.software_updates": "Programvareoppdateringer",
    "card.location_reporting": "Posisjonsrapportering",
    "card.asset_class": "Utstyrsklasse",
    "card.raw_config": "Rå konfigurasjon",
    "card.reboot_dish": "Start antennen på nytt",
    "card.ping_test": "Ping-test",
    "card.export_dump": "Eksporter full rapport",
    "card.raw_grpc": "Rå gRPC-forespørsel",
    "card.grpc_services": "gRPC-tjenester",
    "card.request_fields": "Forespørselsfelt",
    "card.diagnostics": "Diagnostikk",
    "card.router_status": "Ruterstatus",
    "card.wifi_clients": "WiFi-klienter",
    "card.wifi_networks": "WiFi-nettverk",
    "card.radio_stats": "Radiostatistikk",
    "card.self_test": "Selvtest",
    "card.network_interfaces": "Nettverksgrensesnitt",

    "tp.download": "Nedlasting",
    "tp.upload": "Opplasting",
    "tp.dl_max": "Ned maks",
    "tp.dl_avg": "Ned snitt",
    "tp.ul_max": "Opp maks",
    "tp.ul_avg": "Opp snitt",
    "tp.hist_aria": "Datagjennomstrømning: nedlasting og opplasting over tid",

    "kv.latency": "Ventetid",
    "kv.drop_rate": "Pakketap",
    "kv.snr": "SNR",
    "kv.uptime": "Oppetid",
    "kv.min": "Min",
    "kv.max": "Maks",
    "kv.avg": "Snitt",
    "kv.window": "Vindu",
    "kv.starts": "Starter",
    "kv.ends": "Slutter",
    "kv.duration": "Varighet",
    "kv.state": "Tilstand",
    "kv.disablement": "Deaktivering",
    "kv.mobility_class": "Mobilitetsklasse",
    "kv.class_of_service": "Tjenesteklasse",
    "kv.software_update": "Programvareoppdatering",
    "kv.ethernet_speed": "Ethernet-hastighet",
    "kv.self_test": "Selvtest",
    "kv.snr_above_floor": "SNR over grensen",
    "kv.gps_valid": "GPS gyldig",
    "kv.satellites": "Satellitter",
    "kv.tilt": "Helning",
    "kv.azimuth": "Asimut",
    "kv.elevation": "Elevasjon",
    "kv.uncertainty": "Usikkerhet",
    "kv.delta_azimuth": "Δ Asimut",
    "kv.delta_elevation": "Δ Elevasjon",
    "kv.alignment": "Innretting",
    "kv.id": "ID",
    "kv.hardware": "Maskinvare",
    "kv.software": "Programvare",
    "kv.country": "Land",
    "kv.boot_count": "Oppstartstelling",
    "kv.generation": "Generasjon",
    "kv.latitude": "Breddegrad",
    "kv.longitude": "Lengdegrad",
    "kv.altitude": "Høyde",
    "kv.source": "Kilde",
    "kv.accuracy_sigma": "Nøyaktighet σ",
    "kv.horizontal_speed": "Horisontal hastighet",
    "kv.vertical_speed": "Vertikal hastighet",
    "kv.ping_to_dish": "Ping til antenne",
    "kv.ping_to_pop": "Ping til Point of Presence",
    "kv.ping_wan": "Ping (WAN)",
    "kv.router_id": "Ruter-ID",
    "kv.dish_cohoused": "Antenne samlokalisert",
    "kv.ipv4_wan": "IPv4 WAN",
    "kv.ipv6_wan": "IPv6 WAN",
    "kv.dhcp_leases": "DHCP-lån",
    "kv.active_alerts": "Aktive varsler",

    "maps.open": "Åpne i Google Maps ↗",
    "maps.open_osm": "Åpne i OpenStreetMap ↗",
    "align.sky_view": "Himmelvisning for antenne",
    "align.compass_view": "Kompassvisning for antenne",
    "align.current_boresight": "Nåværende siktelinje",
    "align.desired_target": "Ønsket mål",
    "align.converged": "KONVERGERT",
    "align.switch_to_compass": "Kompassvisning",
    "align.switch_to_sky": "Himmelvisning",
    "align.help": "Innrettingsfilteret viser KONVERGERT når antennen har en sikker beregning av peileretningen. Andre tilstander (som INITIALIZING eller RESETTING) betyr at estimatet fortsatt stabiliserer seg etter oppstart, bevegelse eller GPS-tap — avlesningene kan være upålitelige inntil det konvergerer.",

    "obs.aria": "Hindringskart",
    "obs.clear": "fri",
    "obs.partial": "delvis",
    "obs.blocked": "blokkert",

    "config.readonly": "Skrivebeskyttet — LAN gRPC-endepunktet avviser skriving med PERMISSION_DENIED. Endre innstillinger fra Starlink-mobilappen.",
    "config.snow_loading": "Laster nåværende innstilling…",
    "config.snow_unknown_desc": "Gjeldende snøsmelteatferd rapporteres ikke av antennen.",
    "config.snow_not_set": "Ikke satt",
    "config.level_default_label": "Standard",
    "config.level_default_desc": "Antennen bruker standard orientering (helning følger braketten).",
    "config.loc_unknown_desc": "Ukjent modus for posisjonsrapportering.",
    "config.swu.reboot_window_desc": "Omstartsvindu for fastvareoppdateringer",
    "config.swu.three_day": "Tre-dagers utsettelse",
    "config.swu.hour_utc": "{h}:00 UTC",
    "swu.state.tooltip": "Gjeldende fastvareoppdateringsstatus rapportert av antennen. IDLE = oppdatert. DOWNLOADING/FETCHING/VERIFYING/STAGED = ny fastvare klargjøres. REBOOT_REQUIRED = oppdatering klar; antennen vil installere den ved neste omstartsvindu (eller start antennen manuelt for å installere nå).",
    "swu.state.idle": "Oppdatert",
    "swu.state.disabled": "Oppdateringer deaktivert",
    "swu.state.downloading": "Laster ned oppdatering",
    "swu.state.fetching": "Henter oppdatering",
    "swu.state.verifying": "Verifiserer oppdatering",
    "swu.state.staged": "Oppdatering klargjort",
    "swu.state.reboot_required": "Omstart kreves",
    "swu.state.failed": "Oppdatering mislyktes",
    "config.asset_desc": "Intern maskinvarefamilie-ID rapportert av antennens fastvare (knyttet til antennemodellen, ikke abonnementet ditt)",
    "config.asset_class": "Klasse {n}",
    "config.failed_load": "Klarte ikke å laste",
    "config.unknown_error": "Ukjent feil",
    "config.ps.active": "AKTIV",
    "config.ps.disabled": "DEAKTIVERT",
    "config.ps.not_set": "IKKE SATT",
    "config.ps.enabled_label": "Aktivert",
    "config.ps.disabled_label": "Deaktivert",
    "config.ps.not_configured": "Ikke konfigurert",
    "config.ps.now_title": "Nå: {time}",

    "snow.auto.label": "Automatisk",
    "snow.auto.desc": "Varmeren aktiveres automatisk når is oppdages.",
    "snow.auto.pill": "AUTO",
    "snow.on.label": "Forvarming",
    "snow.on.desc": "Varmeren kjører kontinuerlig for å hindre is og snø.",
    "snow.on.pill": "PÅ",
    "snow.off.label": "Av",
    "snow.off.desc": "Snøsmelting er deaktivert. Antennen varmer seg ikke selv.",
    "snow.off.pill": "AV",
    "snow.heating_now": "Varmer nå",

    "level.tilt.label": "Vanlig helning",
    "level.tilt.desc": "Antennen følger brakettens naturlige helning.",
    "level.force.label": "Tving vannrett",
    "level.force.desc": "Antennen tvinges til vannrett uavhengig av braketten.",

    "loc.local.label": "Kun lokalt",
    "loc.local.desc": "Posisjon eksponeres kun over LAN-APIet, rapporteres ikke oppstrøms.",
    "loc.remote.label": "Eksternt",
    "loc.remote.desc": "Posisjon rapporteres til Starlink for ekstern administrasjon.",

    "raw.show": "Vis full JSON",

    "actions.reboot_desc": "Starter antennen på nytt. Tilkoblingen faller i ca. 90 sekunder.",
    "actions.reboot_btn": "Start antennen på nytt",
    "actions.ping_desc": "ICMP-ekko til 192.168.100.1 (5 pakker).",
    "actions.ping_run": "Kjør ping",
    "actions.export_desc": "Laster ned all telemetri og konfigurasjon som JSON.",
    "actions.export_btn": "Last ned JSON",

    "advanced.whitelisted": "Kun tillatte nøkler",
    "advanced.request_key": "Forespørselsnøkkel",
    "advanced.request_key_ph": "f.eks. getStatus",
    "advanced.payload": "Last (JSON, valgfritt)",
    "advanced.send": "Send",
    "advanced.load": "Last",

    "modal.confirm_title": "Bekreft handling",
    "modal.confirm_msg": "Er du sikker?",
    "modal.cancel": "Avbryt",
    "modal.confirm": "Bekreft",

    "confirm.reboot.title": "Start antennen på nytt?",
    "confirm.reboot.msg": "Tilkoblingen vil falle i ca. 90 sekunder mens antennen starter på nytt.",
    "confirm.reboot.ok": "Start på nytt",

    "toast.reboot_sent": "Omstartskommando sendt",
    "toast.reboot_failed": "Omstart mislyktes",
    "toast.ping_running": "Kjører ping…",
    "toast.ping_failed": "Ping mislyktes",
    "toast.ping_no_output": "(ingen utdata)",
    "toast.export_downloaded": "Eksport lastet ned",
    "toast.invalid_json": "Ugyldig JSON",
    "toast.dish_reconnected": "Antenne koblet til igjen",
    "toast.dish_reconnect_failed": "Kunne ikke koble til antennen igjen",
    "toast.router_reconnected": "Ruter koblet til igjen",
    "toast.router_reconnect_failed": "Kunne ikke koble til ruteren igjen",
    "toast.failed": "Mislyktes",

    "bool.yes": "Ja",
    "bool.no": "Nei",

    "alerts.none": "Ingen aktive varsler",
    "alerts.no_alerts": "Ingen",

    "updated": "Oppdatert {time}",

    "pill.live": "LIVE",
    "pill.no_data": "INGEN DATA",
    "pill.healthy": "FRISK",
    "pill.alert_one": "{count} varsel",
    "pill.alert_other": "{count} varsler",

    "router.controller": "Kontrollerruter",
    "router.connected_one": "{count} tilkoblet",
    "router.connected_other": "{count} tilkoblet",
    "router.live": "live",
    "router.stale": "utdatert",
    "router.online": "på nett",

    "empty.routers.title": "Ingen rutere oppdaget",
    "empty.routers.hint": "Antennen rapporterer ingen nedstrøms rutere på Ethernet.",
    "empty.clients.title": "Ingen klienter tilkoblet",
    "empty.clients.hint": "Ingen enheter er for øyeblikket tilknyttet ruteren.",
    "empty.wifi": "Ingen WiFi-nettverk konfigurert",
    "empty.radio": "Ingen radiodata",
    "empty.selftest": "Ingen selvtestresultater",
    "empty.interfaces": "Ingen grensesnitt rapportert",
    "empty.outages": "Ingen utfall registrert i antennens historikkvindu.",
    "empty.events": "Ingen hendelser registrert i antennens historikkvindu.",

    "wifi.hidden": "(skjult)",
    "wifi.guest": "Gjest",
    "wifi.isolated": "Isolert",
    "wifi.domain": "domene {v}",
    "wifi.vlan": "VLAN {v}",
    "wifi.dhcp_lease": "DHCP-lån {v}s",
    "wifi.dhcp_range": "DHCP {v}",
    "wifi.dhcp_off": "DHCP av",
    "wifi.networks_one": "{count} nettverk",
    "wifi.networks_other": "{count} nettverk",
    "wifi.password_label": "Passord",
    "wifi.show_password": "Vis passord",
    "wifi.hide_password": "Skjul",
    "wifi.show_qr": "Vis QR-kode",
    "wifi.qr_title": "Skann for å koble til",
    "wifi.qr_hint": "Pek mobilkameraet på koden og trykk på varselet for å koble til.",
    "wifi.copy_password": "Kopier",
    "wifi.copied": "Passord kopiert",
    "wifi.secrets_failed": "Kunne ikke hente passord",
    "wifi.qr_failed": "Kunne ikke generere QR-kode",
    "wifi.masked_note": "Ruteren deler ikke dette passordet over LAN — skriv det inn én gang for å lagre det lokalt.",
    "wifi.password_placeholder": "Wi-Fi-passord",
    "wifi.save": "Lagre",
    "wifi.forget": "Glem",
    "wifi.saved": "Passord lagret i denne nettleseren",
    "wifi.forgotten": "Passord slettet",
    "wifi.need_password": "Lagre passordet først for å generere QR-kode.",

    "vault.setup_title": "Sett et hovedpassord",
    "vault.setup_desc": "Lagrede Wi-Fi-passord krypteres med dette passordet. Hvis du glemmer det, mister du alle lagrede passord.",
    "vault.unlock_title": "Skriv inn hovedpassord",
    "vault.unlock_desc": "Lås opp passordhvelvet for å fortsette.",
    "vault.password": "Hovedpassord",
    "vault.confirm": "Bekreft passord",
    "vault.min_length": "Hovedpassordet må være minst 8 tegn.",
    "vault.mismatch": "Passordene er ikke like.",
    "vault.wrong": "Feil hovedpassord.",
    "vault.setup_btn": "Lagre passord",
    "vault.unlock_btn": "Lås opp",
    "vault.lock_title": "Lås hvelvet",
    "vault.locked_toast": "Hvelvet er låst.",
    "vault.init_failed": "Kunne ikke opprette hvelvet.",
    "vault.migrated_one": "Flyttet {count} lagret passord til hvelvet.",
    "vault.migrated_other": "Flyttet {count} lagrede passord til hvelvet.",
    "vault.reset_link": "Glemt det? Tilbakestill hvelvet",
    "vault.reset_title": "Tilbakestille hvelvet?",
    "vault.reset_msg": "Dette sletter alle lagrede Wi-Fi-passord. Handlingen kan ikke angres.",
    "vault.reset_ok": "Slett hvelvet",
    "vault.reset_done": "Hvelvet er slettet. Sett et nytt hovedpassord.",

    "selftest.pass": "bestått",
    "selftest.fail": "feilet",
    "selftest.passed": "Bestått",
    "selftest.failed": "Mislyktes",

    "kv.snr.tooltip": "Signal-til-støy-forhold for Starlink-forbindelsen. «Over grensen» (✓) betyr at SNR er høyt nok for normal drift.",
    "kv.class_of_service.tooltip": "Maskinvare-/tjenestekategori rapportert av antennens fastvare. Standard- og Mini-antenner rapporterer CONSUMER uansett om abonnementet er Residential, Roam eller Mobile — selve abonnementstypen eksponeres ikke over det lokale gRPC-API-et. Business-klasse maskinvare rapporterer en annen verdi.",
    "kv.azimuth.tooltip": "Kompasskursen antennen peker i, i grader fra sann nord (0° = N, 90° = Ø, 180° = S, 270° = V).",
    "ready.scp": "SCP — Satellittkontrollprosessor. Antennens hovedfastvare er oppe og kommuniserer med konstellasjonen.",
    "ready.l1l2": "L1/L2 — OSI-lag 1 / lag 2. Modemets fysiske og datalinklag (PHY + MAC) er initialisert.",
    "ready.xphy": "XPHY — Høyhastighets gruppefase-basebånd-PHY er låst og klar.",
    "ready.aap": "AAP — Aktiv antenneprosessor. Strålformings- og fasepipeline er klar.",
    "ready.rf": "RF — Radio-front (transceiver, LNA-er, PA-er) er påslått og kalibrert.",
    "ready.cady": "CADY — Celleakkvisisjon / tidsjusteringstrinn. Ofte «Nei» under normal drift og er ikke i seg selv en feilindikator.",

    "iface.mac": "mac ",
    "iface.link": "lenke ",
    "iface.ch": "kan ",
    "iface.rx_tx": "rx/tx ",
    "iface.up": "oppe",
    "iface.down": "nede",
    "iface.up_count": "{up}/{total} oppe",

    "radio.temp": "temp",
    "radio.rx": "RX",
    "radio.tx": "TX",
    "radio.rx_pkts": "RX pk",
    "radio.tx_pkts": "TX pk",
    "radio.duty": "Belastning",

    "clients.connected_one": "{count} tilkoblet",
    "clients.connected_other": "{count} tilkoblet",

    "time.just_now": "akkurat nå",
    "time.now": "nå",
    "time.s_ago": "{n}s siden",
    "time.m_ago": "{n}m siden",
    "time.h_ago": "{n}t siden",
    "time.d_ago": "{n}d siden",
    "time.assoc": "{dur} tilknyttet",

    "outages.count_one": "{count} registrert",
    "outages.count_other": "{count} registrert",
    "outages.sat_switch": "satellittbytte",
    "outages.no_switch": "ingen bytte",
    "events.count_one": "{count} registrert",
    "events.count_other": "{count} registrert",

    "snr.above_floor": "Over grensen",
    "snr.below_floor": "Under grensen",
    "snr.short": "SNR {n}",

    "units.bps": "bps",
    "units.kbps": "Kbps",
    "units.mbps": "Mbps",
    "units.gbps": "Gbps",
    "units.tbps": "Tbps",
    "units.ms": "ms",
    "units.s": "s",
    "units.db": "dB",
    "units.m": "m",
    "units.mps": "m/s",
    "units.w": "W",
    "units.mbit_s": "Mbps",
    "units.b": "B",
    "units.kb": "KB",
    "units.mb": "MB",
    "units.gb": "GB",
    "units.tb": "TB",
    "units.pct_secs": "{n}s",
    "units.power_w": "{n} W",
    "units.mbit_speed": "{n} Mbps",
    "units.eth_speed": "{n} Mbps",
    "units.h_min": "{h}t {m}m",
    "units.h": "{h}t",
    "units.min": "{m}m",
  };

  const DICTS = { en: EN, nb: NB };
  const LOCALES = { en: "en-US", nb: "nb-NO" };

  const detect = () => {
    try {
      const saved = localStorage.getItem("starlink.lang");
      if (saved === "en" || saved === "nb") return saved;
    } catch {}
    const nav = (navigator.language || navigator.userLanguage || "en").toLowerCase();
    return /^(nb|nn|no)/.test(nav) ? "nb" : "en";
  };

  let lang = detect();
  const listeners = [];

  const interpolate = (str, vars) => {
    if (!vars) return str;
    let out = str;
    for (const k of Object.keys(vars)) {
      out = out.split(`{${k}}`).join(String(vars[k]));
    }
    return out;
  };

  const t = (key, vars) => {
    const dict = DICTS[lang] || EN;
    const raw = dict[key] ?? EN[key] ?? key;
    return interpolate(raw, vars);
  };

  const tp = (key, count, vars) => {
    const suffix = count === 1 ? "_one" : "_other";
    return t(key + suffix, Object.assign({ count }, vars || {}));
  };

  const fmtNumber = (n, opts) => {
    const num = Number(n);
    if (!isFinite(num)) return "—";
    try {
      return new Intl.NumberFormat(LOCALES[lang] || "en-US", opts || {}).format(num);
    } catch {
      return String(num);
    }
  };

  const fmtTime = (date) => {
    try {
      return date.toLocaleTimeString(LOCALES[lang] || "en-US", { hour12: false });
    } catch {
      return date.toLocaleTimeString("en-US", { hour12: false });
    }
  };

  const fmtDate = (date) => {
    try {
      return date.toLocaleDateString(LOCALES[lang] || "en-US");
    } catch {
      return date.toLocaleDateString();
    }
  };

  const applyStatic = (root) => {
    root = root || document;
    root.querySelectorAll("[data-i18n]").forEach((n) => {
      n.textContent = t(n.dataset.i18n);
    });
    root.querySelectorAll("[data-i18n-attr]").forEach((n) => {
      const spec = n.dataset.i18nAttr || "";
      for (const pair of spec.split(";")) {
        const idx = pair.indexOf(":");
        if (idx < 0) continue;
        const attr = pair.slice(0, idx).trim();
        const key = pair.slice(idx + 1).trim();
        if (attr && key) n.setAttribute(attr, t(key));
      }
    });
    if (root === document) {
      document.documentElement.lang = lang === "nb" ? "nb" : "en";
      document.title = t("meta.title");
      const sel = document.getElementById("lang-select");
      if (sel && sel.value !== lang) sel.value = lang;
    }
  };

  const setLang = (next) => {
    if (!DICTS[next] || next === lang) return;
    lang = next;
    try { localStorage.setItem("starlink.lang", lang); } catch {}
    applyStatic();
    for (const fn of listeners) { try { fn(lang); } catch {} }
  };

  const onChange = (fn) => {
    if (typeof fn === "function") listeners.push(fn);
  };

  window.i18n = {
    get lang() { return lang; },
    t, tp,
    setLang,
    onChange,
    applyStatic,
    fmtNumber,
    fmtTime,
    fmtDate,
  };

  document.addEventListener("DOMContentLoaded", () => applyStatic());
})();

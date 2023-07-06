/// <reference types="react" />
/// <reference types="react" />
/// <reference types="trusted-types" />
interface StyledCircleProps {
    color?: string;
}
interface StyledSpinnerProps {
    margin?: string;
}
export declare const StyledSpinner: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<{
    string?: string | number | undefined;
    clipPath?: string | undefined;
    color?: string | undefined;
    cursor?: string | number | undefined;
    direction?: string | number | undefined;
    display?: string | number | undefined;
    filter?: string | undefined;
    fontFamily?: string | undefined;
    fontSize?: string | number | undefined;
    fontSizeAdjust?: string | number | undefined;
    fontStretch?: string | number | undefined;
    fontStyle?: string | number | undefined;
    fontVariant?: string | number | undefined;
    fontWeight?: string | number | undefined;
    height?: string | number | undefined;
    imageRendering?: string | number | undefined;
    letterSpacing?: string | number | undefined;
    opacity?: string | number | undefined;
    order?: string | number | undefined;
    paintOrder?: string | number | undefined;
    pointerEvents?: string | number | undefined;
    rotate?: string | number | undefined;
    scale?: string | number | undefined;
    textRendering?: string | number | undefined;
    transform?: string | undefined;
    unicodeBidi?: string | number | undefined;
    visibility?: string | number | undefined;
    width?: string | number | undefined;
    wordSpacing?: string | number | undefined;
    writingMode?: string | number | undefined;
    mask?: string | undefined;
    offset?: string | number | undefined;
    overflow?: string | number | undefined;
    textDecoration?: string | number | undefined;
    azimuth?: string | number | undefined;
    clip?: string | number | undefined;
    alignmentBaseline?: "inherit" | "auto" | "baseline" | "middle" | "after-edge" | "alphabetic" | "before-edge" | "central" | "hanging" | "ideographic" | "mathematical" | "text-after-edge" | "text-before-edge" | undefined;
    baselineShift?: string | number | undefined;
    clipRule?: string | number | undefined;
    colorInterpolation?: string | number | undefined;
    colorRendering?: string | number | undefined;
    dominantBaseline?: string | number | undefined;
    fill?: string | undefined;
    fillOpacity?: string | number | undefined;
    fillRule?: "inherit" | "evenodd" | "nonzero" | undefined;
    floodColor?: string | number | undefined;
    floodOpacity?: string | number | undefined;
    glyphOrientationVertical?: string | number | undefined;
    lightingColor?: string | number | undefined;
    markerEnd?: string | undefined;
    markerMid?: string | undefined;
    markerStart?: string | undefined;
    shapeRendering?: string | number | undefined;
    stopColor?: string | undefined;
    stopOpacity?: string | number | undefined;
    stroke?: string | undefined;
    strokeDasharray?: string | number | undefined;
    strokeDashoffset?: string | number | undefined;
    strokeLinecap?: "inherit" | "round" | "butt" | "square" | undefined;
    strokeLinejoin?: "inherit" | "round" | "bevel" | "miter" | undefined;
    strokeMiterlimit?: string | number | undefined;
    strokeOpacity?: string | number | undefined;
    strokeWidth?: string | number | undefined;
    textAnchor?: string | undefined;
    vectorEffect?: string | number | undefined;
    end?: string | number | undefined;
    accumulate?: "none" | "sum" | undefined;
    local?: string | number | undefined;
    style?: import("react").CSSProperties | undefined;
    unicode?: string | number | undefined;
    x?: string | number | undefined;
    y?: string | number | undefined;
    alphabetic?: string | number | undefined;
    hanging?: string | number | undefined;
    ideographic?: string | number | undefined;
    mathematical?: string | number | undefined;
    key?: import("react").Key | null | undefined;
    name?: string | undefined;
    type?: string | undefined;
    className?: string | undefined;
    id?: string | undefined;
    lang?: string | undefined;
    tabIndex?: number | undefined;
    role?: import("react").AriaRole | undefined;
    "aria-activedescendant"?: string | undefined;
    "aria-atomic"?: (boolean | "false" | "true") | undefined;
    "aria-autocomplete"?: "none" | "both" | "inline" | "list" | undefined;
    "aria-braillelabel"?: string | undefined;
    "aria-brailleroledescription"?: string | undefined;
    "aria-busy"?: (boolean | "false" | "true") | undefined;
    "aria-checked"?: boolean | "mixed" | "false" | "true" | undefined;
    "aria-colcount"?: number | undefined;
    "aria-colindex"?: number | undefined;
    "aria-colindextext"?: string | undefined;
    "aria-colspan"?: number | undefined;
    "aria-controls"?: string | undefined;
    "aria-current"?: boolean | "page" | "false" | "true" | "time" | "step" | "location" | "date" | undefined;
    "aria-describedby"?: string | undefined;
    "aria-description"?: string | undefined;
    "aria-details"?: string | undefined;
    "aria-disabled"?: (boolean | "false" | "true") | undefined;
    "aria-dropeffect"?: "none" | "link" | "copy" | "move" | "execute" | "popup" | undefined;
    "aria-errormessage"?: string | undefined;
    "aria-expanded"?: (boolean | "false" | "true") | undefined;
    "aria-flowto"?: string | undefined;
    "aria-grabbed"?: (boolean | "false" | "true") | undefined;
    "aria-haspopup"?: boolean | "grid" | "listbox" | "menu" | "false" | "true" | "dialog" | "tree" | undefined;
    "aria-hidden"?: (boolean | "false" | "true") | undefined;
    "aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling" | undefined;
    "aria-keyshortcuts"?: string | undefined;
    "aria-label"?: string | undefined;
    "aria-labelledby"?: string | undefined;
    "aria-level"?: number | undefined;
    "aria-live"?: "off" | "assertive" | "polite" | undefined;
    "aria-modal"?: (boolean | "false" | "true") | undefined;
    "aria-multiline"?: (boolean | "false" | "true") | undefined;
    "aria-multiselectable"?: (boolean | "false" | "true") | undefined;
    "aria-orientation"?: "horizontal" | "vertical" | undefined;
    "aria-owns"?: string | undefined;
    "aria-placeholder"?: string | undefined;
    "aria-posinset"?: number | undefined;
    "aria-pressed"?: boolean | "mixed" | "false" | "true" | undefined;
    "aria-readonly"?: (boolean | "false" | "true") | undefined;
    "aria-relevant"?: "all" | "text" | "additions" | "additions removals" | "additions text" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined;
    "aria-required"?: (boolean | "false" | "true") | undefined;
    "aria-roledescription"?: string | undefined;
    "aria-rowcount"?: number | undefined;
    "aria-rowindex"?: number | undefined;
    "aria-rowindextext"?: string | undefined;
    "aria-rowspan"?: number | undefined;
    "aria-selected"?: (boolean | "false" | "true") | undefined;
    "aria-setsize"?: number | undefined;
    "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
    "aria-valuemax"?: number | undefined;
    "aria-valuemin"?: number | undefined;
    "aria-valuenow"?: number | undefined;
    "aria-valuetext"?: string | undefined;
    children?: import("react").ReactNode;
    dangerouslySetInnerHTML?: {
        __html: string | TrustedHTML;
    } | undefined;
    onCopy?: import("react").ClipboardEventHandler<SVGSVGElement> | undefined;
    onCopyCapture?: import("react").ClipboardEventHandler<SVGSVGElement> | undefined;
    onCut?: import("react").ClipboardEventHandler<SVGSVGElement> | undefined;
    onCutCapture?: import("react").ClipboardEventHandler<SVGSVGElement> | undefined;
    onPaste?: import("react").ClipboardEventHandler<SVGSVGElement> | undefined;
    onPasteCapture?: import("react").ClipboardEventHandler<SVGSVGElement> | undefined;
    onCompositionEnd?: import("react").CompositionEventHandler<SVGSVGElement> | undefined;
    onCompositionEndCapture?: import("react").CompositionEventHandler<SVGSVGElement> | undefined;
    onCompositionStart?: import("react").CompositionEventHandler<SVGSVGElement> | undefined;
    onCompositionStartCapture?: import("react").CompositionEventHandler<SVGSVGElement> | undefined;
    onCompositionUpdate?: import("react").CompositionEventHandler<SVGSVGElement> | undefined;
    onCompositionUpdateCapture?: import("react").CompositionEventHandler<SVGSVGElement> | undefined;
    onFocus?: import("react").FocusEventHandler<SVGSVGElement> | undefined;
    onFocusCapture?: import("react").FocusEventHandler<SVGSVGElement> | undefined;
    onBlur?: import("react").FocusEventHandler<SVGSVGElement> | undefined;
    onBlurCapture?: import("react").FocusEventHandler<SVGSVGElement> | undefined;
    onChange?: import("react").FormEventHandler<SVGSVGElement> | undefined;
    onChangeCapture?: import("react").FormEventHandler<SVGSVGElement> | undefined;
    onBeforeInput?: import("react").FormEventHandler<SVGSVGElement> | undefined;
    onBeforeInputCapture?: import("react").FormEventHandler<SVGSVGElement> | undefined;
    onInput?: import("react").FormEventHandler<SVGSVGElement> | undefined;
    onInputCapture?: import("react").FormEventHandler<SVGSVGElement> | undefined;
    onReset?: import("react").FormEventHandler<SVGSVGElement> | undefined;
    onResetCapture?: import("react").FormEventHandler<SVGSVGElement> | undefined;
    onSubmit?: import("react").FormEventHandler<SVGSVGElement> | undefined;
    onSubmitCapture?: import("react").FormEventHandler<SVGSVGElement> | undefined;
    onInvalid?: import("react").FormEventHandler<SVGSVGElement> | undefined;
    onInvalidCapture?: import("react").FormEventHandler<SVGSVGElement> | undefined;
    onLoad?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onLoadCapture?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onError?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onErrorCapture?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onKeyDown?: import("react").KeyboardEventHandler<SVGSVGElement> | undefined;
    onKeyDownCapture?: import("react").KeyboardEventHandler<SVGSVGElement> | undefined;
    onKeyPress?: import("react").KeyboardEventHandler<SVGSVGElement> | undefined;
    onKeyPressCapture?: import("react").KeyboardEventHandler<SVGSVGElement> | undefined;
    onKeyUp?: import("react").KeyboardEventHandler<SVGSVGElement> | undefined;
    onKeyUpCapture?: import("react").KeyboardEventHandler<SVGSVGElement> | undefined;
    onAbort?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onAbortCapture?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onCanPlay?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onCanPlayCapture?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onCanPlayThrough?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onCanPlayThroughCapture?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onDurationChange?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onDurationChangeCapture?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onEmptied?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onEmptiedCapture?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onEncrypted?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onEncryptedCapture?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onEnded?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onEndedCapture?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onLoadedData?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onLoadedDataCapture?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onLoadedMetadata?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onLoadedMetadataCapture?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onLoadStart?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onLoadStartCapture?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onPause?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onPauseCapture?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onPlay?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onPlayCapture?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onPlaying?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onPlayingCapture?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onProgress?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onProgressCapture?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onRateChange?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onRateChangeCapture?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onResize?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onResizeCapture?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onSeeked?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onSeekedCapture?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onSeeking?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onSeekingCapture?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onStalled?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onStalledCapture?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onSuspend?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onSuspendCapture?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onTimeUpdate?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onTimeUpdateCapture?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onVolumeChange?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onVolumeChangeCapture?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onWaiting?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onWaitingCapture?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onAuxClick?: import("react").MouseEventHandler<SVGSVGElement> | undefined;
    onAuxClickCapture?: import("react").MouseEventHandler<SVGSVGElement> | undefined;
    onClick?: import("react").MouseEventHandler<SVGSVGElement> | undefined;
    onClickCapture?: import("react").MouseEventHandler<SVGSVGElement> | undefined;
    onContextMenu?: import("react").MouseEventHandler<SVGSVGElement> | undefined;
    onContextMenuCapture?: import("react").MouseEventHandler<SVGSVGElement> | undefined;
    onDoubleClick?: import("react").MouseEventHandler<SVGSVGElement> | undefined;
    onDoubleClickCapture?: import("react").MouseEventHandler<SVGSVGElement> | undefined;
    onDrag?: import("react").DragEventHandler<SVGSVGElement> | undefined;
    onDragCapture?: import("react").DragEventHandler<SVGSVGElement> | undefined;
    onDragEnd?: import("react").DragEventHandler<SVGSVGElement> | undefined;
    onDragEndCapture?: import("react").DragEventHandler<SVGSVGElement> | undefined;
    onDragEnter?: import("react").DragEventHandler<SVGSVGElement> | undefined;
    onDragEnterCapture?: import("react").DragEventHandler<SVGSVGElement> | undefined;
    onDragExit?: import("react").DragEventHandler<SVGSVGElement> | undefined;
    onDragExitCapture?: import("react").DragEventHandler<SVGSVGElement> | undefined;
    onDragLeave?: import("react").DragEventHandler<SVGSVGElement> | undefined;
    onDragLeaveCapture?: import("react").DragEventHandler<SVGSVGElement> | undefined;
    onDragOver?: import("react").DragEventHandler<SVGSVGElement> | undefined;
    onDragOverCapture?: import("react").DragEventHandler<SVGSVGElement> | undefined;
    onDragStart?: import("react").DragEventHandler<SVGSVGElement> | undefined;
    onDragStartCapture?: import("react").DragEventHandler<SVGSVGElement> | undefined;
    onDrop?: import("react").DragEventHandler<SVGSVGElement> | undefined;
    onDropCapture?: import("react").DragEventHandler<SVGSVGElement> | undefined;
    onMouseDown?: import("react").MouseEventHandler<SVGSVGElement> | undefined;
    onMouseDownCapture?: import("react").MouseEventHandler<SVGSVGElement> | undefined;
    onMouseEnter?: import("react").MouseEventHandler<SVGSVGElement> | undefined;
    onMouseLeave?: import("react").MouseEventHandler<SVGSVGElement> | undefined;
    onMouseMove?: import("react").MouseEventHandler<SVGSVGElement> | undefined;
    onMouseMoveCapture?: import("react").MouseEventHandler<SVGSVGElement> | undefined;
    onMouseOut?: import("react").MouseEventHandler<SVGSVGElement> | undefined;
    onMouseOutCapture?: import("react").MouseEventHandler<SVGSVGElement> | undefined;
    onMouseOver?: import("react").MouseEventHandler<SVGSVGElement> | undefined;
    onMouseOverCapture?: import("react").MouseEventHandler<SVGSVGElement> | undefined;
    onMouseUp?: import("react").MouseEventHandler<SVGSVGElement> | undefined;
    onMouseUpCapture?: import("react").MouseEventHandler<SVGSVGElement> | undefined;
    onSelect?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onSelectCapture?: import("react").ReactEventHandler<SVGSVGElement> | undefined;
    onTouchCancel?: import("react").TouchEventHandler<SVGSVGElement> | undefined;
    onTouchCancelCapture?: import("react").TouchEventHandler<SVGSVGElement> | undefined;
    onTouchEnd?: import("react").TouchEventHandler<SVGSVGElement> | undefined;
    onTouchEndCapture?: import("react").TouchEventHandler<SVGSVGElement> | undefined;
    onTouchMove?: import("react").TouchEventHandler<SVGSVGElement> | undefined;
    onTouchMoveCapture?: import("react").TouchEventHandler<SVGSVGElement> | undefined;
    onTouchStart?: import("react").TouchEventHandler<SVGSVGElement> | undefined;
    onTouchStartCapture?: import("react").TouchEventHandler<SVGSVGElement> | undefined;
    onPointerDown?: import("react").PointerEventHandler<SVGSVGElement> | undefined;
    onPointerDownCapture?: import("react").PointerEventHandler<SVGSVGElement> | undefined;
    onPointerMove?: import("react").PointerEventHandler<SVGSVGElement> | undefined;
    onPointerMoveCapture?: import("react").PointerEventHandler<SVGSVGElement> | undefined;
    onPointerUp?: import("react").PointerEventHandler<SVGSVGElement> | undefined;
    onPointerUpCapture?: import("react").PointerEventHandler<SVGSVGElement> | undefined;
    onPointerCancel?: import("react").PointerEventHandler<SVGSVGElement> | undefined;
    onPointerCancelCapture?: import("react").PointerEventHandler<SVGSVGElement> | undefined;
    onPointerEnter?: import("react").PointerEventHandler<SVGSVGElement> | undefined;
    onPointerEnterCapture?: import("react").PointerEventHandler<SVGSVGElement> | undefined;
    onPointerLeave?: import("react").PointerEventHandler<SVGSVGElement> | undefined;
    onPointerLeaveCapture?: import("react").PointerEventHandler<SVGSVGElement> | undefined;
    onPointerOver?: import("react").PointerEventHandler<SVGSVGElement> | undefined;
    onPointerOverCapture?: import("react").PointerEventHandler<SVGSVGElement> | undefined;
    onPointerOut?: import("react").PointerEventHandler<SVGSVGElement> | undefined;
    onPointerOutCapture?: import("react").PointerEventHandler<SVGSVGElement> | undefined;
    onGotPointerCapture?: import("react").PointerEventHandler<SVGSVGElement> | undefined;
    onGotPointerCaptureCapture?: import("react").PointerEventHandler<SVGSVGElement> | undefined;
    onLostPointerCapture?: import("react").PointerEventHandler<SVGSVGElement> | undefined;
    onLostPointerCaptureCapture?: import("react").PointerEventHandler<SVGSVGElement> | undefined;
    onScroll?: import("react").UIEventHandler<SVGSVGElement> | undefined;
    onScrollCapture?: import("react").UIEventHandler<SVGSVGElement> | undefined;
    onWheel?: import("react").WheelEventHandler<SVGSVGElement> | undefined;
    onWheelCapture?: import("react").WheelEventHandler<SVGSVGElement> | undefined;
    onAnimationStart?: import("react").AnimationEventHandler<SVGSVGElement> | undefined;
    onAnimationStartCapture?: import("react").AnimationEventHandler<SVGSVGElement> | undefined;
    onAnimationEnd?: import("react").AnimationEventHandler<SVGSVGElement> | undefined;
    onAnimationEndCapture?: import("react").AnimationEventHandler<SVGSVGElement> | undefined;
    onAnimationIteration?: import("react").AnimationEventHandler<SVGSVGElement> | undefined;
    onAnimationIterationCapture?: import("react").AnimationEventHandler<SVGSVGElement> | undefined;
    onTransitionEnd?: import("react").TransitionEventHandler<SVGSVGElement> | undefined;
    onTransitionEndCapture?: import("react").TransitionEventHandler<SVGSVGElement> | undefined;
    path?: string | undefined;
    target?: string | undefined;
    max?: string | number | undefined;
    media?: string | undefined;
    method?: string | undefined;
    min?: string | number | undefined;
    crossOrigin?: "" | "anonymous" | "use-credentials" | undefined;
    accentHeight?: string | number | undefined;
    additive?: "replace" | "sum" | undefined;
    allowReorder?: "yes" | "no" | undefined;
    amplitude?: string | number | undefined;
    arabicForm?: "initial" | "medial" | "terminal" | "isolated" | undefined;
    ascent?: string | number | undefined;
    attributeName?: string | undefined;
    attributeType?: string | undefined;
    autoReverse?: (boolean | "false" | "true") | undefined;
    baseFrequency?: string | number | undefined;
    baseProfile?: string | number | undefined;
    bbox?: string | number | undefined;
    begin?: string | number | undefined;
    bias?: string | number | undefined;
    by?: string | number | undefined;
    calcMode?: string | number | undefined;
    capHeight?: string | number | undefined;
    clipPathUnits?: string | number | undefined;
    colorInterpolationFilters?: "inherit" | "auto" | "linearRGB" | "sRGB" | undefined;
    colorProfile?: string | number | undefined;
    contentScriptType?: string | number | undefined;
    contentStyleType?: string | number | undefined;
    cx?: string | number | undefined;
    cy?: string | number | undefined;
    d?: string | undefined;
    decelerate?: string | number | undefined;
    descent?: string | number | undefined;
    diffuseConstant?: string | number | undefined;
    divisor?: string | number | undefined;
    dur?: string | number | undefined;
    dx?: string | number | undefined;
    dy?: string | number | undefined;
    edgeMode?: string | number | undefined;
    elevation?: string | number | undefined;
    enableBackground?: string | number | undefined;
    exponent?: string | number | undefined;
    externalResourcesRequired?: (boolean | "false" | "true") | undefined;
    filterRes?: string | number | undefined;
    filterUnits?: string | number | undefined;
    focusable?: "auto" | (boolean | "false" | "true") | undefined;
    format?: string | number | undefined;
    fr?: string | number | undefined;
    from?: string | number | undefined;
    fx?: string | number | undefined;
    fy?: string | number | undefined;
    g1?: string | number | undefined;
    g2?: string | number | undefined;
    glyphName?: string | number | undefined;
    glyphOrientationHorizontal?: string | number | undefined;
    glyphRef?: string | number | undefined;
    gradientTransform?: string | undefined;
    gradientUnits?: string | undefined;
    horizAdvX?: string | number | undefined;
    horizOriginX?: string | number | undefined;
    href?: string | undefined;
    in2?: string | number | undefined;
    in?: string | undefined;
    intercept?: string | number | undefined;
    k1?: string | number | undefined;
    k2?: string | number | undefined;
    k3?: string | number | undefined;
    k4?: string | number | undefined;
    k?: string | number | undefined;
    kernelMatrix?: string | number | undefined;
    kernelUnitLength?: string | number | undefined;
    kerning?: string | number | undefined;
    keyPoints?: string | number | undefined;
    keySplines?: string | number | undefined;
    keyTimes?: string | number | undefined;
    lengthAdjust?: string | number | undefined;
    limitingConeAngle?: string | number | undefined;
    markerHeight?: string | number | undefined;
    markerUnits?: string | number | undefined;
    markerWidth?: string | number | undefined;
    maskContentUnits?: string | number | undefined;
    maskUnits?: string | number | undefined;
    mode?: string | number | undefined;
    numOctaves?: string | number | undefined;
    operator?: string | number | undefined;
    orient?: string | number | undefined;
    orientation?: string | number | undefined;
    origin?: string | number | undefined;
    overlinePosition?: string | number | undefined;
    overlineThickness?: string | number | undefined;
    panose1?: string | number | undefined;
    pathLength?: string | number | undefined;
    patternContentUnits?: string | undefined;
    patternTransform?: string | number | undefined;
    patternUnits?: string | undefined;
    points?: string | undefined;
    pointsAtX?: string | number | undefined;
    pointsAtY?: string | number | undefined;
    pointsAtZ?: string | number | undefined;
    preserveAlpha?: (boolean | "false" | "true") | undefined;
    preserveAspectRatio?: string | undefined;
    primitiveUnits?: string | number | undefined;
    r?: string | number | undefined;
    radius?: string | number | undefined;
    refX?: string | number | undefined;
    refY?: string | number | undefined;
    renderingIntent?: string | number | undefined;
    repeatCount?: string | number | undefined;
    repeatDur?: string | number | undefined;
    requiredExtensions?: string | number | undefined;
    requiredFeatures?: string | number | undefined;
    restart?: string | number | undefined;
    result?: string | undefined;
    rx?: string | number | undefined;
    ry?: string | number | undefined;
    seed?: string | number | undefined;
    slope?: string | number | undefined;
    spacing?: string | number | undefined;
    specularConstant?: string | number | undefined;
    specularExponent?: string | number | undefined;
    speed?: string | number | undefined;
    spreadMethod?: string | undefined;
    startOffset?: string | number | undefined;
    stdDeviation?: string | number | undefined;
    stemh?: string | number | undefined;
    stemv?: string | number | undefined;
    stitchTiles?: string | number | undefined;
    strikethroughPosition?: string | number | undefined;
    strikethroughThickness?: string | number | undefined;
    surfaceScale?: string | number | undefined;
    systemLanguage?: string | number | undefined;
    tableValues?: string | number | undefined;
    targetX?: string | number | undefined;
    targetY?: string | number | undefined;
    textLength?: string | number | undefined;
    to?: string | number | undefined;
    u1?: string | number | undefined;
    u2?: string | number | undefined;
    underlinePosition?: string | number | undefined;
    underlineThickness?: string | number | undefined;
    unicodeRange?: string | number | undefined;
    unitsPerEm?: string | number | undefined;
    vAlphabetic?: string | number | undefined;
    values?: string | undefined;
    version?: string | undefined;
    vertAdvY?: string | number | undefined;
    vertOriginX?: string | number | undefined;
    vertOriginY?: string | number | undefined;
    vHanging?: string | number | undefined;
    vIdeographic?: string | number | undefined;
    viewBox?: string | undefined;
    viewTarget?: string | number | undefined;
    vMathematical?: string | number | undefined;
    widths?: string | number | undefined;
    x1?: string | number | undefined;
    x2?: string | number | undefined;
    xChannelSelector?: string | undefined;
    xHeight?: string | number | undefined;
    xlinkActuate?: string | undefined;
    xlinkArcrole?: string | undefined;
    xlinkHref?: string | undefined;
    xlinkRole?: string | undefined;
    xlinkShow?: string | undefined;
    xlinkTitle?: string | undefined;
    xlinkType?: string | undefined;
    xmlBase?: string | undefined;
    xmlLang?: string | undefined;
    xmlns?: string | undefined;
    xmlnsXlink?: string | undefined;
    xmlSpace?: string | undefined;
    y1?: string | number | undefined;
    y2?: string | number | undefined;
    yChannelSelector?: string | undefined;
    z?: string | number | undefined;
    zoomAndPan?: string | undefined;
    ref?: ((instance: SVGSVGElement | null) => void) | import("react").RefObject<SVGSVGElement> | null | undefined;
}, StyledSpinnerProps>>;
export declare const StyledCircle: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").SVGProps<SVGCircleElement>, StyledCircleProps>>;
export {};

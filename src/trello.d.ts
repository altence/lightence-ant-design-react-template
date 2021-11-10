/* eslint-disable @typescript-eslint/ban-types */

declare class ReactTrelloBoard<CardMetaData> extends React.Component<ReactTrello.BoardProps<CardMetaData>> {}

declare namespace ReactTrello {
  /**
   * react-trello uses `React.cloneElement`, so these props
   * will have to be added to `defaultProps`, otherwise
   * TypeScript will (understandably) freak out.
   */
  interface NewCardTemplateProps<CardMetaData = object> {
    laneId: string;
    onAdd: (card: Card<CardMetaData>) => void;
    onCancel: () => void;
  }

  interface BoardData<CardMetaData = object> {
    lanes: Array<Lane<CardMetaData>>;
  }

  type node = unknown & React.ReactNode;
  type element = unknown & React.ReactElement<unknown>;

  type Special = unknown;

  interface EventBus {
    publish: (any) => void;
  }

  interface DraggableCard {
    id?: string;
    title: string;
    description?: string;
    label?: string;
    metadata?: any;
  }

  interface Lane {
    id: string;
    title?: string;
    label?: string;
    cards?: Array<DraggableCard>;
    disallowAddingCard?: boolean;
  }

  interface BoardProps<CardMetaData = object> {
    /**
     * Makes all cards and lanes draggable. Default: false
     */
    draggable?: boolean;
    /**
     * Set to false to disable lane dragging. Default: true
     */
    laneDraggable?: boolean;
    /**
     * Set to false to disable card dragging. Default: true
     */
    cardDraggable?: boolean;
    /**
     * Make the lanes with cards collapsible. Default: false
     */
    collapsibleLanes?: boolean;
    /**
     * Makes the entire board editable. Allow cards to be added or deleted Default: false
     */
    editable?: boolean;
    /**
     * Callback function triggered when card drag is started: handleDragStart(cardId, laneId)
     */
    handleDragStart?: (cardId: string, laneId: string) => void;
    /**
     * Callback function triggered when card drag ends: handleDragEnd(cardId, sourceLaneId, targetLaneId, position, cardDetails)
     */
    handleDragEnd?: (
      cardId: string,
      sourceLandId: string,
      targetLaneId: string,
      position: number,
      cardDetails: Card<CardMetaData>,
    ) => void;
    /**
     * Callback function triggered when lane drag is started: handleLaneDragStart(laneId)
     */
    handleLaneDragStart?: (laneId: string) => void;
    /**
     * Callback function triggered when lane drag ends: handleLaneDragEnd(laneId, newPosition)
     */
    handleLaneDragEnd?: (laneId: string, newPosition: number) => void;
    /**
     * CSS class to be applied to Card when being dragged
     */
    cardDragClass?: string;
    /**
     * CSS class to be applied to Lane when being dragged
     */
    laneDragClass?: string;
    /**
     * Called when a lane is scrolled to the end: onLaneScroll(requestedPage, laneId)
     */
    onLaneScroll?: (requestedPage: unknown, laneId: string) => void;
    /**
     * Called when a card is clicked: onCardClick(cardId, metadata, laneId)
     */
    onCardClick?: (cardId: string, metaData: CardMetaData, laneId: string) => void;
    /**
     * Called when a new card is added: onCardAdd(card, laneId)
     */
    onCardAdd?: (card: DraggableCard, laneId: string) => void;
    /**
     * Pass custom element to replace the Add Card link at the end of the lane (when board is editable)
     */
    components?: {
      AddCardLink?: React.Element;
      NewCardForm?: React.Element;
      Card?: React.Element;
      LaneHeader?: React.Element;
    };

    addCardLink?: React.Element;
    /**
     * Pass a custom new card template to add new cards to a lane (when board is editable)
     */
    newCardTemplate?: node;
    /**
     * Pass a custom new lane template to add new lanes to a board (when board is editable)
     */
    newLaneTemplate?: node;
    /**
     * Disable showing the delete icon to the top right corner of the card (when board is editable)
     */
    hideCardDeleteIcon?: boolean;
    /**
     * Called when a card is deleted: onCardDelete(cardId, laneId)
     */
    onCardDelete?: (cardId: string, laneId: string) => void;
    /**
     * Called when a lane is clicked: onLaneClick(laneId). Card clicks are not propagated to lane click event
     */
    onLaneClick?: (laneId: string) => void;
    /**
     * Used to specify the logic to sort cards on a lane: laneSortFunction(card1, card2)
     */
    laneSortFunction?: (card1: Card, card2: Card) => void;
    /**
     * This is a special function that providers a publishHook to pass new events to the board. See details in Publish Events section
     */
    eventBusHandle?: (hook: EventBus) => void;
    /**
     * Called everytime the data changes due to user interaction or event bus: onDataChange(newData)
     */
    onDataChange?: (newData: unknown) => void;
    /**
     * Pass css style props to board container
     */
    style?: React.CSSProperties;
    /**
     * Pass css style props to lane container
     */
    laneStyle?: React.CSSProperties;

    /**
     * Pass css style props to card container
     */
    cardStyle?: React.CSSProperties;

    /**
     * Boolean to indicate a custom card template will be specified. Add the card component as child to Board
     */
    customCardLayout?: boolean;
    /**
     * Pass custom lane header as react component to modify appearance
     */
    customLaneHeader?: element;
    /**
     * Actual board data in the form of json
     */
    data: BoardData<CardMetaData>;
    /**
     * If cards have tags, use this prop to modify their style
     */
    tagStyle?: object;
    addLaneTitle?: string;
    addCardTitle?: string;
  }
}

declare module 'react-trello' {
  export default ReactTrelloBoard;
}

declare module 'react-trello/dist/styles/Base';

declare module 'react-trello/dist/widgets/InlineInput';

declare module 'react-trello/dist/widgets/DeleteButton';

declare module 'react-trello/dist/components/Card/Tag';

declare module 'react-trello/dist/components/Lane/LaneHeader/LaneMenu';

declare module 'react-trello/dist/styles/Elements';

declare module 'react-trello/dist/widgets/EditableLabel';

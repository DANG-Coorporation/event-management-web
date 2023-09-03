import { createSlice } from "@reduxjs/toolkit";
import { DateTime } from "luxon";
const today = DateTime.now().toISODate();

export const ticketType = {
  paid: {
    name: "Berbayar",
  },
  free: {
    name: "Gratis",
  },
  minimumPay: {
    name: "Bayar Sesukamu",
  },
};

export const tempalteTicket = {
  name: "",
  price: 0,
  quota: 0,
  description: "",
  ticketType: "",
  sellPeriod: {
    start: "",
    end: "",
  },
};

const initialState = {
  name: "createEvent",
  userFullName: "Galih Setyawan",
  coverImage: "",
  organizerPhoto: "",
  formatIndex: null,
  topicIndex: null,
  isOpenModalCategory: false,
  isOpenModalEventDateTime: false,
  isOpenModalGetEventLocation: false,
  modalStatus: {
    isOpenModalCategory: false,
    isOpenModalEventDateTime: false,
    isOpenModalGetEventLocation: false,
    isOpenModalDetailTicket: false,
  },
  modal: {
    detailTicket: {
      type: "",
    },
  },
  eventTime: {
    date: {
      start: today,
      end: today,
    },
    time: {
      start: "00:00",
      end: "00:00",
    },
  },
  address: {
    name: "Stadion GBK",
    city: "Jakarta",
    placeName: "Gelora Bung Karno",
    coordinate: {
      lat: -6.218335,
      long: 106.802216,
    },
  },
  isPrivate: false,
  tag: [],
  data: {
    tickets: [
      {
        name: "PLATINUM",
        price: 500000,
        quota: 200,
        description: "Ini Tiket Platinum untuk orang umum",
        ticketType: ticketType.paid.name,
        sellPeriod: {
          start: "2023-08-20 10:00",
          end: "2023-09-24 10:00",
        },
      },
      {
        name: "GOLD",
        price: 50000,
        quota: 200,
        description: "Ini Tiket Platinum untuk orang umum",
        ticketType: ticketType.paid.name,
        sellPeriod: {
          start: "2023-09-20 10:00",
          end: "2023-09-24 10:00",
        },
      },
    ],
  },
};

const createEventSlice = createSlice({
  name: "createEvent",
  initialState,
  reducers: {
    setCoverImage: (state, action) => {
      state.coverImage = action.payload;
    },
    removeCoverImage: (state) => {
      state.coverImage = "";
    },
    setModalCategory: (state, action) => {
      state.isOpenModalCategory = action.payload;
    },
    setFormatEvent: (state, action) => {
      state.formatIndex = action.payload;
    },
    setTopicEvent: (state, action) => {
      state.topicIndex = action.payload;
    },
    setEventPrivacy: (state, action) => {
      state.isPrivate = action.payload;
    },
    setEventTags: (state, action) => {
      state.tag = action.payload;
    },
    setOrganizerPhoto: (state, action) => {
      state.organizerPhoto = action.payload;
    },
    setModalEventDateTime: (state, action) => {
      state.isOpenModalEventDateTime = action.payload;
    },
    setEventStartDate: (state, action) => {
      state.eventTime.date.start = action.payload;
    },
    setEventEndDate: (state, action) => {
      state.eventTime.date.end = action.payload;
    },
    setEventStartTime: (state, action) => {
      state.eventTime.time.start = action.payload;
    },
    setEventEndTime: (state, action) => {
      state.eventTime.time.end = action.payload;
    },
    setModalGetEventLocation: (state, action) => {
      state.isOpenModalGetEventLocation = action.payload;
    },
    setEventAddressName: (state, action) => {
      state.address.name = action.payload;
    },
    setEventAddressCity: (state, action) => {
      state.address.city = action.payload;
    },
    setEventAddressPlaceName: (state, action) => {
      state.address.placeName = action.payload;
    },
    setEventAddressCoordinateLat: (state, action) => {
      state.address.coordinate.lat = action.payload;
    },
    setEventAddressCoordinateLong: (state, action) => {
      state.address.coordinate.long = action.payload;
    },
    addTicketTier: (state, action) => {
      state.data.tickets.push(action.payload);
    },
    removeTicketTier: (state, action) => {
      state.data.tickets.splice(action.payload, 1);
    },
    setModalDetileTicketStatus: (state, action) => {
      state.modalStatus.isOpenModalDetailTicket = action.payload;
    },
    setModalDetailTicketType: (state, action) => {
      state.modal.detailTicket.type = action.payload;
    },
  },
});

export const {
  setCoverImage,
  removeCoverImage,
  setModalCategory,
  setFormatEvent,
  setTopicEvent,
  setEventPrivacy,
  setEventTags,
  setOrganizerPhoto,
  setModalEventDateTime,
  setEventStartDate,
  setEventEndDate,
  setEventStartTime,
  setEventEndTime,
  setModalGetEventLocation,
  setEventAddressName,
  setEventAddressCity,
  setEventAddressPlaceName,
  setEventAddressCoordinateLat,
  setEventAddressCoordinateLong,
  addTicketTier,
  removeTicketTier,
  setModalDetileTicketStatus,
  setModalDetailTicketType,
} = createEventSlice.actions;

export default createEventSlice.reducer;

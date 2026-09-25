import { motion } from "motion/react";

function ContactPage() {
  return (
    <section>
      <h2 className="text-3xl font-bold py-4 text-center">
        Stay in touch with us.
      </h2>
      <div className="flex min-w-0 w-full flex-col gap-4 lg:flex-row lg:gap-0">
        <div className="card bg-base-300 rounded-box grid h-auto w-full min-w-0 grow place-items-center p-4 lg:h-[70vh] lg:w-1/2">
          <h2 className="text-3xl text-bold text-center mb-0">
            Booking Terms & Conditions
          </h2>
          <ol className="min-w-0 p-4 wrap-break-word sm:p-6">
            <li>
              1.{" "}
              <span className="text-bold text-md text-gray-100">
                Appointment Booking
              </span>{" "}
              - Appointments can be booked through our website or by contacting
              the barbershop directly. Customers are responsible for providing
              accurate contact information and selecting the correct service,
              barber, date, and time. An appointment is only confirmed once a
              booking confirmation has been received.
            </li>
            <li>
              2.{" "}
              <span className="text-bold text-md text-gray-100">
                Cancellations & Rescheduling
              </span>{" "}
              - Customers may cancel or reschedule their appointment at least 24
              hours before the scheduled time. Cancellations made within 24
              hours of the appointment may be treated as a late cancellation and
              could affect future bookings.
            </li>
            <li>
              3.{" "}
              <span className="text-bold text-md text-gray-100">
                Late Arrivals
              </span>{" "}
              - Customers who arrive more than 15 minutes late may have their
              appointment shortened or cancelled, depending on the barber's
              availability. This helps us keep appointments running on schedule
              and ensures other customers are not inconvenienced.
            </li>
            <li>
              4.{" "}
              <span className="text-bold text-md text-gray-100">No-Shows</span>{" "}
              - If a customer does not arrive for a scheduled appointment
              without cancelling, it will be considered a no-show. Repeated
              no-shows may result in restrictions on future bookings or a
              requirement to make a deposit before another appointment can be
              confirmed.
            </li>
          </ol>
          <a
            href="https://calendar.app.google/7NfiRo9CHqx8Jeke6"
            target="_blank"
          >
            <motion.button
              whileHover={{ y: -5 }}
              className="btn btn-primary"
              type="submit"
            >
              Book Appointment
            </motion.button>
          </a>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="card bg-base-100 rounded-box grid h-auto w-full min-w-0 place-items-center lg:w-1/2">
          <div className="card bg-base-300 w-full max-w-lg min-w-0 shadow-2xl">
            <div className="card-body min-w-0">
              <form action="https://formspree.io/f/meaozdjv" method="POST">
                <fieldset className="fieldset">
                  <legend className="text-3xl text-bold text-center">
                    Contact Form.
                  </legend>
                  <fieldset className="fieldset">
                    <legend className="fieldset-legend">
                      Full Name<span className="text-red-500 mr-0">*</span>
                    </legend>
                    <input
                      type="text"
                      name="fullName"
                      className="input w-full"
                      placeholder="Enter your full name"
                      required
                    />
                  </fieldset>
                  <fieldset className="fieldset">
                    <legend className="fieldset-legend">
                      Email Address<span className="text-red-500">*</span>
                    </legend>
                    <input
                      type="email"
                      name="email"
                      className="input w-full"
                      placeholder="Enter your email address"
                      required
                    />
                  </fieldset>
                  <fieldset className="fieldset">
                    <legend className="fieldset-legend">
                      Your Message<span className="text-red-500">*</span>
                    </legend>
                    <textarea
                      className="textarea h-24 w-full"
                      name="message"
                      placeholder="Enter message"
                      required
                    ></textarea>
                  </fieldset>
                  <motion.button
                    whileHover={{ y: -5 }}
                    className="btn btn-primary mt-4"
                    type="submit"
                  >
                    Submit Message
                  </motion.button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;

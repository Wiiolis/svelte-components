<svelte:options customElement="swc-notification"/>

<div class="notification_wrapper">
    <div class="left"><slot name="left"></slot></div>
    <div class="right"><slot name="right"></slot></div>
    <div class="action"><slot name="action"></slot></div>
</div>

<style>
.notification_wrapper {
    border-top: 1px solid rgba(0, 0, 0, 0.12);
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    display: flex;
    justify-content: space-between;
    padding: 1em;
    cursor: pointer;
    color: #25355b;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

.right::before {
  content: "o";
  position: absolute;
  margin-left: -2.7em;
  margin-top: 0.9em;
}

.left {
    flex: 0;
}

.right {
    flex: 8;
    padding-left: 6em;
}

.action {
    flex: 0;
}

p {
    color: #777 !important
}

h4 {

}
</style>

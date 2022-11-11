sidebarNodes={"extras":[{"group":"","headers":[{"anchor":"modules","id":"Modules"}],"id":"api-reference","title":"API Reference"},{"group":"Core Concepts","headers":[],"id":"0001-overview","title":"Overview"},{"group":"Core Concepts","headers":[{"anchor":"message-structure","id":"Message Structure"},{"anchor":"data-and-types","id":"Data and Types"},{"anchor":"key","id":"Key"},{"anchor":"timestamp","id":"Timestamp"},{"anchor":"subtype","id":"Subtype"},{"anchor":"metadata","id":"Metadata"},{"anchor":"json-encoding","id":"JSON Encoding"}],"id":"0002-flow-messages","title":"Astarte Flow Messages"},{"group":"Core Concepts","headers":[{"anchor":"validation","id":"Validation"}],"id":"0003-blocks","title":"Blocks"},{"group":"Core Concepts","headers":[],"id":"0004-pipelines","title":"Pipelines"},{"group":"Core Concepts","headers":[],"id":"0005-flows","title":"Flows"},{"group":"Core Concepts","headers":[],"id":"0006-streams","title":"Streams"},{"group":"Core Concepts","headers":[{"anchor":"integers","id":"Integers"},{"anchor":"booleans","id":"Booleans"},{"anchor":"strings","id":"Strings"},{"anchor":"objects","id":"Objects"},{"anchor":"jsonpath","id":"JSONPath"}],"id":"0010-defining-a-pipeline","title":"Defining a Pipeline"},{"group":"Core Concepts","headers":[{"anchor":"overview","id":"Overview"},{"anchor":"limitations","id":"Limitations"},{"anchor":"known-issues","id":"Known issues"}],"id":"0020-pipeline-editor","title":"Pipeline Editor"},{"group":"Built-in Blocks","headers":[{"anchor":"realm","id":"realm"},{"anchor":"amqp_exchange","id":"amqp_exchange"},{"anchor":"amqp_routing_key","id":"amqp_routing_key"},{"anchor":"target_devices","id":"target_devices"}],"id":"astarte_devices_source","title":"astarte_devices_source"},{"group":"Built-in Blocks","headers":[{"anchor":"image","id":"image"},{"anchor":"type","id":"type"},{"anchor":"image_pull_secrets","id":"image_pull_secrets"}],"id":"container","title":"container"},{"group":"Built-in Blocks","headers":[{"anchor":"script","id":"script"}],"id":"filter","title":"filter"},{"group":"Built-in Blocks","headers":[{"anchor":"url","id":"url"},{"anchor":"headers","id":"headers"}],"id":"http_sink","title":"http_sink"},{"group":"Built-in Blocks","headers":[{"anchor":"base_url","id":"base_url"},{"anchor":"target_paths","id":"target_paths"},{"anchor":"polling_interval_ms","id":"polling_interval_ms"},{"anchor":"headers","id":"headers"}],"id":"http_source","title":"http_source"},{"group":"Built-in Blocks","headers":[{"anchor":"template","id":"template"}],"id":"json_path_map","title":"json_path_map"},{"group":"Built-in Blocks","headers":[{"anchor":"script","id":"script"},{"anchor":"config","id":"config"}],"id":"lua_map","title":"lua_map"},{"group":"Built-in Blocks","headers":[{"anchor":"host","id":"host"},{"anchor":"port","id":"port"},{"anchor":"slave_id","id":"slave_id"},{"anchor":"targets","id":"targets"}],"id":"modbus_tcp_source","title":"modbus_tcp_source"},{"group":"Built-in Blocks","headers":[{"anchor":"broker_url","id":"broker_url"},{"anchor":"client_id","id":"client_id"},{"anchor":"ignore_ssl_errors","id":"ignore_ssl_errors"},{"anchor":"username","id":"username"},{"anchor":"password","id":"password"},{"anchor":"ca_cert_pem","id":"ca_cert_pem"},{"anchor":"client_cert_pem","id":"client_cert_pem"},{"anchor":"private_key_pem","id":"private_key_pem"},{"anchor":"qos","id":"qos"}],"id":"mqtt_sink","title":"mqtt_sink"},{"group":"Built-in Blocks","headers":[{"anchor":"broker_url","id":"broker_url"},{"anchor":"subscriptions","id":"subscriptions"},{"anchor":"client_id","id":"client_id"},{"anchor":"ignore_ssl_errors","id":"ignore_ssl_errors"},{"anchor":"username","id":"username"},{"anchor":"password","id":"password"},{"anchor":"ca_cert_pem","id":"ca_cert_pem"},{"anchor":"client_cert_pem","id":"client_cert_pem"},{"anchor":"private_key_pem","id":"private_key_pem"},{"anchor":"subtype","id":"subtype"}],"id":"mqtt_source","title":"mqtt_source"},{"group":"Built-in Blocks","headers":[{"anchor":"key","id":"key"},{"anchor":"type","id":"type"},{"anchor":"min","id":"min"},{"anchor":"max","id":"max"},{"anchor":"p","id":"p"},{"anchor":"delay_ms","id":"delay_ms"}],"id":"random_source","title":"random_source"},{"group":"Built-in Blocks","headers":[{"anchor":"window_size_ms","id":"window_size_ms"},{"anchor":"deduplicate","id":"deduplicate"}],"id":"sort","title":"sort"},{"group":"Built-in Blocks","headers":[{"anchor":"key_action","id":"key_action"},{"anchor":"delimiter","id":"delimiter"},{"anchor":"fallback_action","id":"fallback_action"}],"id":"split_map","title":"split_map"},{"group":"Built-in Blocks","headers":[{"anchor":"pretty","id":"pretty"},{"anchor":"template","id":"template"}],"id":"to_json","title":"to_json"},{"group":"Built-in Blocks","headers":[{"anchor":"metadata","id":"metadata"}],"id":"update_metadata","title":"update_metadata"},{"group":"Built-in Blocks","headers":[{"anchor":"target-devices","id":"Target devices"},{"anchor":"static-devices","id":"Static devices"},{"anchor":"pairing_url","id":"pairing_url"},{"anchor":"target_devices","id":"target_devices"},{"anchor":"dynamic-devices","id":"Dynamic devices"},{"anchor":"pairing_url","id":"pairing_url"},{"anchor":"realms","id":"realms"},{"anchor":"interfaces","id":"interfaces"},{"anchor":"static-devices","id":"Static devices"},{"anchor":"dynamic-devices","id":"Dynamic devices"}],"id":"virtual_device_pool","title":"virtual_device_pool"}],"modules":[{"group":"","id":"Astarte.Flow.Auth","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"fetch_public_key/1","id":"fetch_public_key/1"}]}],"sections":[],"title":"Astarte.Flow.Auth"},{"group":"","id":"Astarte.Flow.Auth.AstartePublicKeyProvider","sections":[],"title":"Astarte.Flow.Auth.AstartePublicKeyProvider"},{"group":"","id":"Astarte.Flow.Auth.FilesystemPublicKeyProvider","sections":[],"title":"Astarte.Flow.Auth.FilesystemPublicKeyProvider"},{"group":"","id":"Astarte.Flow.Auth.Guardian","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"after_encode_and_sign/4","id":"after_encode_and_sign/4"},{"anchor":"after_sign_in/5","id":"after_sign_in/5"},{"anchor":"before_sign_out/3","id":"before_sign_out/3"},{"anchor":"build_claims/3","id":"build_claims/3"},{"anchor":"config/0","id":"config/0"},{"anchor":"config/2","id":"config/2"},{"anchor":"decode_and_verify/3","id":"decode_and_verify/3"},{"anchor":"default_token_type/0","id":"default_token_type/0"},{"anchor":"encode_and_sign/3","id":"encode_and_sign/3"},{"anchor":"exchange/4","id":"exchange/4"},{"anchor":"on_exchange/3","id":"on_exchange/3"},{"anchor":"on_refresh/3","id":"on_refresh/3"},{"anchor":"on_revoke/3","id":"on_revoke/3"},{"anchor":"on_verify/3","id":"on_verify/3"},{"anchor":"peek/1","id":"peek/1"},{"anchor":"refresh/2","id":"refresh/2"},{"anchor":"resource_from_claims/1","id":"resource_from_claims/1"},{"anchor":"resource_from_token/3","id":"resource_from_token/3"},{"anchor":"revoke/2","id":"revoke/2"},{"anchor":"sliding_cookie/3","id":"sliding_cookie/3"},{"anchor":"subject_for_token/2","id":"subject_for_token/2"},{"anchor":"verify_claims/2","id":"verify_claims/2"}]}],"sections":[],"title":"Astarte.Flow.Auth.Guardian"},{"group":"","id":"Astarte.Flow.Auth.Guardian.Plug","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"authenticated?/2","id":"authenticated?/2"},{"anchor":"clear_remember_me/2","id":"clear_remember_me/2"},{"anchor":"current_claims/2","id":"current_claims/2"},{"anchor":"current_resource/2","id":"current_resource/2"},{"anchor":"current_token/2","id":"current_token/2"},{"anchor":"implementation/0","id":"implementation/0"},{"anchor":"put_current_claims/3","id":"put_current_claims/3"},{"anchor":"put_current_resource/3","id":"put_current_resource/3"},{"anchor":"put_current_token/3","id":"put_current_token/3"},{"anchor":"put_session_token/3","id":"put_session_token/3"},{"anchor":"remember_me/4","id":"remember_me/4"},{"anchor":"remember_me_from_token/4","id":"remember_me_from_token/4"},{"anchor":"sign_in/4","id":"sign_in/4"},{"anchor":"sign_out/2","id":"sign_out/2"}]}],"sections":[],"title":"Astarte.Flow.Auth.Guardian.Plug"},{"group":"","id":"Astarte.Flow.Auth.RealmPublicKeyProvider","nodeGroups":[{"key":"callbacks","name":"Callbacks","nodes":[{"anchor":"c:fetch_public_key/1","id":"fetch_public_key/1"}]}],"sections":[],"title":"Astarte.Flow.Auth.RealmPublicKeyProvider"},{"group":"","id":"Astarte.Flow.Auth.User","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","id":"t/0"}]}],"sections":[],"title":"Astarte.Flow.Auth.User"},{"group":"","id":"Astarte.Flow.Blocks","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"check_default_blocks_conflict/1","id":"check_default_blocks_conflict/1"},{"anchor":"create_block/2","id":"create_block/2"},{"anchor":"delete_block/2","id":"delete_block/2"},{"anchor":"get_block/2","id":"get_block/2"},{"anchor":"list_blocks/1","id":"list_blocks/1"}]}],"sections":[],"title":"Astarte.Flow.Blocks"},{"group":"","id":"Astarte.Flow.Blocks.Block","sections":[],"title":"Astarte.Flow.Blocks.Block"},{"group":"","id":"Astarte.Flow.Blocks.Container","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"get_container_block/1","id":"get_container_block/1"},{"anchor":"start_link/1","id":"start_link/1"}]}],"sections":[],"title":"Astarte.Flow.Blocks.Container"},{"group":"","id":"Astarte.Flow.Blocks.Container.RabbitMQClient","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"generate_config/1","id":"generate_config/1"},{"anchor":"setup/2","id":"setup/2"}]}],"sections":[],"title":"Astarte.Flow.Blocks.Container.RabbitMQClient"},{"group":"","id":"Astarte.Flow.Blocks.DETSStorage","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"child_spec/1","id":"child_spec/1"},{"anchor":"delete_block/2","id":"delete_block/2"},{"anchor":"fetch_block/2","id":"fetch_block/2"},{"anchor":"insert_block/2","id":"insert_block/2"},{"anchor":"list_blocks/1","id":"list_blocks/1"},{"anchor":"start_link/1","id":"start_link/1"}]}],"sections":[],"title":"Astarte.Flow.Blocks.DETSStorage"},{"group":"","id":"Astarte.Flow.Blocks.DefaultBlocks","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"fetch/1","id":"fetch/1"},{"anchor":"list/0","id":"list/0"}]}],"sections":[],"title":"Astarte.Flow.Blocks.DefaultBlocks"},{"group":"","id":"Astarte.Flow.Blocks.DeviceEventsProducer","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"start_link/1","id":"start_link/1"}]}],"sections":[],"title":"Astarte.Flow.Blocks.DeviceEventsProducer"},{"group":"","id":"Astarte.Flow.Blocks.DeviceEventsProducer.EventsDecoder","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"decode_simple_event/1","id":"decode_simple_event/1"},{"anchor":"simple_event_to_message/1","id":"simple_event_to_message/1"}]}],"sections":[],"title":"Astarte.Flow.Blocks.DeviceEventsProducer.EventsDecoder"},{"group":"","id":"Astarte.Flow.Blocks.DeviceEventsProducer.RabbitMQClient","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"generate_config/1","id":"generate_config/1"},{"anchor":"setup_channel/1","id":"setup_channel/1"}]}],"sections":[],"title":"Astarte.Flow.Blocks.DeviceEventsProducer.RabbitMQClient"},{"group":"","id":"Astarte.Flow.Blocks.DynamicVirtualDevicePool","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"start_link/1","id":"start_link/1"}]}],"sections":[],"title":"Astarte.Flow.Blocks.DynamicVirtualDevicePool"},{"group":"","id":"Astarte.Flow.Blocks.DynamicVirtualDevicePool.CredentialsStorage","nodeGroups":[{"key":"callbacks","name":"Callbacks","nodes":[{"anchor":"c:fetch_credentials_secret/2","id":"fetch_credentials_secret/2"},{"anchor":"c:store_credentials_secret/3","id":"store_credentials_secret/3"}]}],"sections":[],"title":"Astarte.Flow.Blocks.DynamicVirtualDevicePool.CredentialsStorage"},{"group":"","id":"Astarte.Flow.Blocks.DynamicVirtualDevicePool.DETSCredentialsStorage","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"child_spec/1","id":"child_spec/1"},{"anchor":"start_link/1","id":"start_link/1"}]}],"sections":[],"title":"Astarte.Flow.Blocks.DynamicVirtualDevicePool.DETSCredentialsStorage"},{"group":"","id":"Astarte.Flow.Blocks.Filter","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"start_link/1","id":"start_link/1"}]}],"sections":[],"title":"Astarte.Flow.Blocks.Filter"},{"group":"","id":"Astarte.Flow.Blocks.Filter.Config","sections":[],"title":"Astarte.Flow.Blocks.Filter.Config"},{"group":"","id":"Astarte.Flow.Blocks.FilterFunctions","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"make_filter/1","id":"make_filter/1"}]}],"sections":[],"title":"Astarte.Flow.Blocks.FilterFunctions"},{"group":"","id":"Astarte.Flow.Blocks.HttpSink","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"start_link/1","id":"start_link/1"}]}],"sections":[],"title":"Astarte.Flow.Blocks.HttpSink"},{"group":"","id":"Astarte.Flow.Blocks.HttpSource","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"start_link/1","id":"start_link/1"}]}],"sections":[],"title":"Astarte.Flow.Blocks.HttpSource"},{"group":"","id":"Astarte.Flow.Blocks.JsonMapper","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"start_link/1","id":"start_link/1"},{"anchor":"to_json/2","id":"to_json/2"}]}],"sections":[],"title":"Astarte.Flow.Blocks.JsonMapper"},{"group":"","id":"Astarte.Flow.Blocks.JsonPathMapper","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"json_path_transform/2","id":"json_path_transform/2"},{"anchor":"start_link/1","id":"start_link/1"}]}],"sections":[],"title":"Astarte.Flow.Blocks.JsonPathMapper"},{"group":"","id":"Astarte.Flow.Blocks.JsonPathMapper.JsonTemplate","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:compiled_item/0","id":"compiled_item/0"},{"anchor":"t:compiled_template/0","id":"compiled_template/0"},{"anchor":"t:rendered_template/0","id":"rendered_template/0"},{"anchor":"t:template/0","id":"template/0"},{"anchor":"t:template_base_type/0","id":"template_base_type/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"compile_template/1","id":"compile_template/1"},{"anchor":"render/2","id":"render/2"}]}],"sections":[],"title":"Astarte.Flow.Blocks.JsonPathMapper.JsonTemplate"},{"group":"","id":"Astarte.Flow.Blocks.LuaMapper","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"lua_map/2","id":"lua_map/2"},{"anchor":"start_link/1","id":"start_link/1"}]}],"sections":[],"title":"Astarte.Flow.Blocks.LuaMapper"},{"group":"","id":"Astarte.Flow.Blocks.MapSplitter","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"split_map/2","id":"split_map/2"},{"anchor":"start_link/1","id":"start_link/1"}]}],"sections":[],"title":"Astarte.Flow.Blocks.MapSplitter"},{"group":"","id":"Astarte.Flow.Blocks.ModbusTCPSource","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"start_link/1","id":"start_link/1"}]}],"sections":[],"title":"Astarte.Flow.Blocks.ModbusTCPSource"},{"group":"","id":"Astarte.Flow.Blocks.MqttSink","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"start_link/1","id":"start_link/1"}]}],"sections":[],"title":"Astarte.Flow.Blocks.MqttSink"},{"group":"","id":"Astarte.Flow.Blocks.MqttSource","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"start_link/1","id":"start_link/1"}]}],"sections":[],"title":"Astarte.Flow.Blocks.MqttSource"},{"group":"","id":"Astarte.Flow.Blocks.RandomProducer","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:boolean_option/0","id":"boolean_option/0"},{"anchor":"t:integer_option/0","id":"integer_option/0"},{"anchor":"t:option/0","id":"option/0"},{"anchor":"t:options/0","id":"options/0"},{"anchor":"t:real_option/0","id":"real_option/0"},{"anchor":"t:supported_types/0","id":"supported_types/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"start_link/1","id":"start_link/1"}]}],"sections":[],"title":"Astarte.Flow.Blocks.RandomProducer"},{"group":"","id":"Astarte.Flow.Blocks.Sorter","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"process_message/3","id":"process_message/3"},{"anchor":"start_link/1","id":"start_link/1"},{"anchor":"take_ready/2","id":"take_ready/2"}]}],"sections":[],"title":"Astarte.Flow.Blocks.Sorter"},{"group":"","id":"Astarte.Flow.Blocks.Sorter.Config","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:option/0","id":"option/0"},{"anchor":"t:t/0","id":"t/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"from_keyword/1","id":"from_keyword/1"}]}],"sections":[],"title":"Astarte.Flow.Blocks.Sorter.Config"},{"group":"","id":"Astarte.Flow.Blocks.Sorter.State","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","id":"t/0"}]}],"sections":[],"title":"Astarte.Flow.Blocks.Sorter.State"},{"group":"","id":"Astarte.Flow.Blocks.Storage","nodeGroups":[{"key":"callbacks","name":"Callbacks","nodes":[{"anchor":"c:delete_block/2","id":"delete_block/2"},{"anchor":"c:fetch_block/2","id":"fetch_block/2"},{"anchor":"c:insert_block/2","id":"insert_block/2"},{"anchor":"c:list_blocks/1","id":"list_blocks/1"}]}],"sections":[],"title":"Astarte.Flow.Blocks.Storage"},{"group":"","id":"Astarte.Flow.Blocks.UpdateMetadata","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"start_link/1","id":"start_link/1"}]}],"sections":[],"title":"Astarte.Flow.Blocks.UpdateMetadata"},{"group":"","id":"Astarte.Flow.Blocks.VirtualDevicePool","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"start_link/1","id":"start_link/1"}]}],"sections":[],"title":"Astarte.Flow.Blocks.VirtualDevicePool"},{"group":"","id":"Astarte.Flow.Compat","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"normalize_device_pairing_url/1","id":"normalize_device_pairing_url/1"}]}],"sections":[],"title":"Astarte.Flow.Compat"},{"group":"","id":"Astarte.Flow.Config","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:options/0","id":"options/0"},{"anchor":"t:ssl_option/0","id":"ssl_option/0"},{"anchor":"t:ssl_options/0","id":"ssl_options/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"astarte_instance/1","id":"astarte_instance/1"},{"anchor":"astarte_instance!/1","id":"astarte_instance!/1"},{"anchor":"default_amqp_connection!/0","id":"default_amqp_connection!/0"},{"anchor":"default_amqp_connection_host/1","id":"default_amqp_connection_host/1"},{"anchor":"default_amqp_connection_host!/1","id":"default_amqp_connection_host!/1"},{"anchor":"default_amqp_connection_password/1","id":"default_amqp_connection_password/1"},{"anchor":"default_amqp_connection_password!/1","id":"default_amqp_connection_password!/1"},{"anchor":"default_amqp_connection_port/1","id":"default_amqp_connection_port/1"},{"anchor":"default_amqp_connection_port!/1","id":"default_amqp_connection_port!/1"},{"anchor":"default_amqp_connection_ssl_ca_file/1","id":"default_amqp_connection_ssl_ca_file/1"},{"anchor":"default_amqp_connection_ssl_ca_file!/1","id":"default_amqp_connection_ssl_ca_file!/1"},{"anchor":"default_amqp_connection_ssl_custom_sni/1","id":"default_amqp_connection_ssl_custom_sni/1"},{"anchor":"default_amqp_connection_ssl_custom_sni!/1","id":"default_amqp_connection_ssl_custom_sni!/1"},{"anchor":"default_amqp_connection_ssl_disable_sni/1","id":"default_amqp_connection_ssl_disable_sni/1"},{"anchor":"default_amqp_connection_ssl_disable_sni!/1","id":"default_amqp_connection_ssl_disable_sni!/1"},{"anchor":"default_amqp_connection_ssl_enabled/1","id":"default_amqp_connection_ssl_enabled/1"},{"anchor":"default_amqp_connection_ssl_enabled!/1","id":"default_amqp_connection_ssl_enabled!/1"},{"anchor":"default_amqp_connection_username/1","id":"default_amqp_connection_username/1"},{"anchor":"default_amqp_connection_username!/1","id":"default_amqp_connection_username!/1"},{"anchor":"default_amqp_connection_virtual_host/1","id":"default_amqp_connection_virtual_host/1"},{"anchor":"default_amqp_connection_virtual_host!/1","id":"default_amqp_connection_virtual_host!/1"},{"anchor":"default_amqp_prefetch_count/1","id":"default_amqp_prefetch_count/1"},{"anchor":"default_amqp_prefetch_count!/1","id":"default_amqp_prefetch_count!/1"},{"anchor":"disable_authentication/1","id":"disable_authentication/1"},{"anchor":"disable_authentication!/1","id":"disable_authentication!/1"},{"anchor":"persistency_dir/1","id":"persistency_dir/1"},{"anchor":"persistency_dir!/1","id":"persistency_dir!/1"},{"anchor":"put_astarte_instance/2","id":"put_astarte_instance/2"},{"anchor":"put_default_amqp_connection_host/2","id":"put_default_amqp_connection_host/2"},{"anchor":"put_default_amqp_connection_password/2","id":"put_default_amqp_connection_password/2"},{"anchor":"put_default_amqp_connection_port/2","id":"put_default_amqp_connection_port/2"},{"anchor":"put_default_amqp_connection_ssl_ca_file/2","id":"put_default_amqp_connection_ssl_ca_file/2"},{"anchor":"put_default_amqp_connection_ssl_custom_sni/2","id":"put_default_amqp_connection_ssl_custom_sni/2"},{"anchor":"put_default_amqp_connection_ssl_disable_sni/2","id":"put_default_amqp_connection_ssl_disable_sni/2"},{"anchor":"put_default_amqp_connection_ssl_enabled/2","id":"put_default_amqp_connection_ssl_enabled/2"},{"anchor":"put_default_amqp_connection_username/2","id":"put_default_amqp_connection_username/2"},{"anchor":"put_default_amqp_connection_virtual_host/2","id":"put_default_amqp_connection_virtual_host/2"},{"anchor":"put_default_amqp_prefetch_count/2","id":"put_default_amqp_prefetch_count/2"},{"anchor":"put_disable_authentication/2","id":"put_disable_authentication/2"},{"anchor":"put_persistency_dir/2","id":"put_persistency_dir/2"},{"anchor":"put_realm_public_key_provider/2","id":"put_realm_public_key_provider/2"},{"anchor":"put_realm_public_keys_dir/2","id":"put_realm_public_keys_dir/2"},{"anchor":"put_target_namespace/2","id":"put_target_namespace/2"},{"anchor":"put_xandra_nodes/2","id":"put_xandra_nodes/2"},{"anchor":"realm_public_key_provider/1","id":"realm_public_key_provider/1"},{"anchor":"realm_public_key_provider!/1","id":"realm_public_key_provider!/1"},{"anchor":"realm_public_keys_dir/1","id":"realm_public_keys_dir/1"},{"anchor":"realm_public_keys_dir!/1","id":"realm_public_keys_dir!/1"},{"anchor":"reload_astarte_instance/1","id":"reload_astarte_instance/1"},{"anchor":"reload_default_amqp_connection_host/1","id":"reload_default_amqp_connection_host/1"},{"anchor":"reload_default_amqp_connection_password/1","id":"reload_default_amqp_connection_password/1"},{"anchor":"reload_default_amqp_connection_port/1","id":"reload_default_amqp_connection_port/1"},{"anchor":"reload_default_amqp_connection_ssl_ca_file/1","id":"reload_default_amqp_connection_ssl_ca_file/1"},{"anchor":"reload_default_amqp_connection_ssl_custom_sni/1","id":"reload_default_amqp_connection_ssl_custom_sni/1"},{"anchor":"reload_default_amqp_connection_ssl_disable_sni/1","id":"reload_default_amqp_connection_ssl_disable_sni/1"},{"anchor":"reload_default_amqp_connection_ssl_enabled/1","id":"reload_default_amqp_connection_ssl_enabled/1"},{"anchor":"reload_default_amqp_connection_username/1","id":"reload_default_amqp_connection_username/1"},{"anchor":"reload_default_amqp_connection_virtual_host/1","id":"reload_default_amqp_connection_virtual_host/1"},{"anchor":"reload_default_amqp_prefetch_count/1","id":"reload_default_amqp_prefetch_count/1"},{"anchor":"reload_disable_authentication/1","id":"reload_disable_authentication/1"},{"anchor":"reload_persistency_dir/1","id":"reload_persistency_dir/1"},{"anchor":"reload_realm_public_key_provider/1","id":"reload_realm_public_key_provider/1"},{"anchor":"reload_realm_public_keys_dir/1","id":"reload_realm_public_keys_dir/1"},{"anchor":"reload_target_namespace/1","id":"reload_target_namespace/1"},{"anchor":"reload_xandra_nodes/1","id":"reload_xandra_nodes/1"},{"anchor":"target_namespace/1","id":"target_namespace/1"},{"anchor":"target_namespace!/1","id":"target_namespace!/1"},{"anchor":"template/2","id":"template/2"},{"anchor":"validate/1","id":"validate/1"},{"anchor":"validate!/1","id":"validate!/1"},{"anchor":"xandra_nodes/1","id":"xandra_nodes/1"},{"anchor":"xandra_nodes!/1","id":"xandra_nodes!/1"}]}],"sections":[],"title":"Astarte.Flow.Config"},{"group":"","id":"Astarte.Flow.Config.XandraNodes","sections":[],"title":"Astarte.Flow.Config.XandraNodes"},{"group":"","id":"Astarte.Flow.Flows","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"create_flow/2","id":"create_flow/2"},{"anchor":"delete_flow/2","id":"delete_flow/2"},{"anchor":"get_flow/2","id":"get_flow/2"},{"anchor":"list_flows/1","id":"list_flows/1"}]}],"sections":[],"title":"Astarte.Flow.Flows"},{"group":"","id":"Astarte.Flow.Flows.DETSStorage","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"child_spec/1","id":"child_spec/1"},{"anchor":"delete_flow/2","id":"delete_flow/2"},{"anchor":"get_all_flows/0","id":"get_all_flows/0"},{"anchor":"insert_flow/2","id":"insert_flow/2"},{"anchor":"start_link/1","id":"start_link/1"}]}],"sections":[],"title":"Astarte.Flow.Flows.DETSStorage"},{"group":"","id":"Astarte.Flow.Flows.Flow","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"child_spec/1","id":"child_spec/1"},{"anchor":"get_flow/1","id":"get_flow/1"},{"anchor":"get_flow/2","id":"get_flow/2"},{"anchor":"start_link/1","id":"start_link/1"},{"anchor":"tap/2","id":"tap/2"}]}],"sections":[],"title":"Astarte.Flow.Flows.Flow"},{"group":"","id":"Astarte.Flow.Flows.Flow.State","sections":[],"title":"Astarte.Flow.Flows.Flow.State"},{"group":"","id":"Astarte.Flow.Flows.Storage","nodeGroups":[{"key":"callbacks","name":"Callbacks","nodes":[{"anchor":"c:delete_flow/2","id":"delete_flow/2"},{"anchor":"c:get_all_flows/0","id":"get_all_flows/0"},{"anchor":"c:insert_flow/2","id":"insert_flow/2"}]}],"sections":[],"title":"Astarte.Flow.Flows.Storage"},{"group":"","id":"Astarte.Flow.K8s","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"container_block_resource/1","id":"container_block_resource/1"},{"anchor":"create_flow/4","id":"create_flow/4"},{"anchor":"delete_flow/1","id":"delete_flow/1"},{"anchor":"flow_custom_resource/4","id":"flow_custom_resource/4"},{"anchor":"flow_status/1","id":"flow_status/1"},{"anchor":"try_delete_flow/1","id":"try_delete_flow/1"}]}],"sections":[],"title":"Astarte.Flow.K8s"},{"group":"","id":"Astarte.Flow.K8s.ContainerBlock","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","id":"t/0"}]}],"sections":[],"title":"Astarte.Flow.K8s.ContainerBlock"},{"group":"","id":"Astarte.Flow.Message","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:basic_data/0","id":"basic_data/0"},{"anchor":"t:basic_data_type/0","id":"basic_data_type/0"},{"anchor":"t:data/0","id":"data/0"},{"anchor":"t:data_type/0","id":"data_type/0"},{"anchor":"t:data_type_with_array/0","id":"data_type_with_array/0"},{"anchor":"t:data_with_array/0","id":"data_with_array/0"},{"anchor":"t:message_metadata/0","id":"message_metadata/0"},{"anchor":"t:message_timestamp/0","id":"message_timestamp/0"},{"anchor":"t:subtype/0","id":"subtype/0"},{"anchor":"t:t/0","id":"t/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"deserialize_type/1","id":"deserialize_type/1"},{"anchor":"from_map/1","id":"from_map/1"},{"anchor":"serialize_type/1","id":"serialize_type/1"},{"anchor":"to_map/1","id":"to_map/1"},{"anchor":"unwrap_data/2","id":"unwrap_data/2"},{"anchor":"wrap_data/2","id":"wrap_data/2"}]}],"sections":[],"title":"Astarte.Flow.Message"},{"group":"","id":"Astarte.Flow.PipelineBuilder.Error","sections":[],"title":"Astarte.Flow.PipelineBuilder.Error"},{"group":"","id":"Astarte.Flow.Pipelines","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"create_pipeline/2","id":"create_pipeline/2"},{"anchor":"delete_pipeline/2","id":"delete_pipeline/2"},{"anchor":"get_pipeline/2","id":"get_pipeline/2"},{"anchor":"list_pipelines/1","id":"list_pipelines/1"}]}],"sections":[],"title":"Astarte.Flow.Pipelines"},{"group":"","id":"Astarte.Flow.Pipelines.DETSStorage","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"child_spec/1","id":"child_spec/1"},{"anchor":"delete_pipeline/2","id":"delete_pipeline/2"},{"anchor":"fetch_pipeline/2","id":"fetch_pipeline/2"},{"anchor":"insert_pipeline/2","id":"insert_pipeline/2"},{"anchor":"list_pipelines/1","id":"list_pipelines/1"},{"anchor":"start_link/1","id":"start_link/1"}]}],"sections":[],"title":"Astarte.Flow.Pipelines.DETSStorage"},{"group":"","id":"Astarte.Flow.Pipelines.Pipeline","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"validate_pipeline_source/2","id":"validate_pipeline_source/2"},{"anchor":"validate_schema/2","id":"validate_schema/2"}]}],"sections":[],"title":"Astarte.Flow.Pipelines.Pipeline"},{"group":"","id":"Astarte.Flow.Pipelines.Storage","nodeGroups":[{"key":"callbacks","name":"Callbacks","nodes":[{"anchor":"c:delete_pipeline/2","id":"delete_pipeline/2"},{"anchor":"c:fetch_pipeline/2","id":"fetch_pipeline/2"},{"anchor":"c:insert_pipeline/2","id":"insert_pipeline/2"},{"anchor":"c:list_pipelines/1","id":"list_pipelines/1"}]}],"sections":[],"title":"Astarte.Flow.Pipelines.Storage"},{"group":"","id":"Astarte.Flow.RestoreFlowsTask","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"child_spec/1","id":"child_spec/1"},{"anchor":"run/1","id":"run/1"},{"anchor":"start_link/1","id":"start_link/1"}]}],"sections":[],"title":"Astarte.Flow.RestoreFlowsTask"},{"group":"","id":"Astarte.FlowWeb","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"__using__/1","id":"__using__/1"},{"anchor":"channel/0","id":"channel/0"},{"anchor":"controller/0","id":"controller/0"},{"anchor":"router/0","id":"router/0"},{"anchor":"view/0","id":"view/0"}]}],"sections":[],"title":"Astarte.FlowWeb"},{"group":"","id":"Astarte.FlowWeb.BlockController","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"create/2","id":"create/2"},{"anchor":"delete/2","id":"delete/2"},{"anchor":"index/2","id":"index/2"},{"anchor":"show/2","id":"show/2"}]}],"sections":[],"title":"Astarte.FlowWeb.BlockController"},{"group":"","id":"Astarte.FlowWeb.BlockView","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"__resource__/0","id":"__resource__/0"},{"anchor":"render/2","id":"render/2"},{"anchor":"template_not_found/2","id":"template_not_found/2"}]}],"sections":[],"title":"Astarte.FlowWeb.BlockView"},{"group":"","id":"Astarte.FlowWeb.ChangesetView","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"__resource__/0","id":"__resource__/0"},{"anchor":"render/2","id":"render/2"},{"anchor":"template_not_found/2","id":"template_not_found/2"},{"anchor":"translate_errors/1","id":"translate_errors/1"}]}],"sections":[],"title":"Astarte.FlowWeb.ChangesetView"},{"group":"","id":"Astarte.FlowWeb.Endpoint","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"broadcast/3","id":"broadcast/3"},{"anchor":"broadcast!/3","id":"broadcast!/3"},{"anchor":"broadcast_from/4","id":"broadcast_from/4"},{"anchor":"broadcast_from!/4","id":"broadcast_from!/4"},{"anchor":"call/2","id":"call/2"},{"anchor":"child_spec/1","id":"child_spec/1"},{"anchor":"config/2","id":"config/2"},{"anchor":"config_change/2","id":"config_change/2"},{"anchor":"host/0","id":"host/0"},{"anchor":"init/1","id":"init/1"},{"anchor":"local_broadcast/3","id":"local_broadcast/3"},{"anchor":"local_broadcast_from/4","id":"local_broadcast_from/4"},{"anchor":"path/1","id":"path/1"},{"anchor":"script_name/0","id":"script_name/0"},{"anchor":"start_link/1","id":"start_link/1"},{"anchor":"static_integrity/1","id":"static_integrity/1"},{"anchor":"static_lookup/1","id":"static_lookup/1"},{"anchor":"static_path/1","id":"static_path/1"},{"anchor":"static_url/0","id":"static_url/0"},{"anchor":"struct_url/0","id":"struct_url/0"},{"anchor":"subscribe/2","id":"subscribe/2"},{"anchor":"unsubscribe/1","id":"unsubscribe/1"},{"anchor":"url/0","id":"url/0"}]}],"sections":[],"title":"Astarte.FlowWeb.Endpoint"},{"group":"","id":"Astarte.FlowWeb.ErrorHelpers","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"translate_error/1","id":"translate_error/1"}]}],"sections":[],"title":"Astarte.FlowWeb.ErrorHelpers"},{"group":"","id":"Astarte.FlowWeb.ErrorView","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"__resource__/0","id":"__resource__/0"},{"anchor":"render/2","id":"render/2"},{"anchor":"template_not_found/2","id":"template_not_found/2"}]}],"sections":[],"title":"Astarte.FlowWeb.ErrorView"},{"group":"","id":"Astarte.FlowWeb.FallbackController","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"auth_error/3","id":"auth_error/3"}]}],"sections":[],"title":"Astarte.FlowWeb.FallbackController"},{"group":"","id":"Astarte.FlowWeb.FlowController","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"create/2","id":"create/2"},{"anchor":"delete/2","id":"delete/2"},{"anchor":"index/2","id":"index/2"},{"anchor":"show/2","id":"show/2"}]}],"sections":[],"title":"Astarte.FlowWeb.FlowController"},{"group":"","id":"Astarte.FlowWeb.FlowView","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"__resource__/0","id":"__resource__/0"},{"anchor":"render/2","id":"render/2"},{"anchor":"template_not_found/2","id":"template_not_found/2"}]}],"sections":[],"title":"Astarte.FlowWeb.FlowView"},{"group":"","id":"Astarte.FlowWeb.Gettext","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"dgettext/3","id":"dgettext/3"},{"anchor":"dgettext_noop/2","id":"dgettext_noop/2"},{"anchor":"dngettext/5","id":"dngettext/5"},{"anchor":"dngettext_noop/3","id":"dngettext_noop/3"},{"anchor":"dpgettext/4","id":"dpgettext/4"},{"anchor":"dpgettext_noop/3","id":"dpgettext_noop/3"},{"anchor":"dpngettext/6","id":"dpngettext/6"},{"anchor":"dpngettext_noop/4","id":"dpngettext_noop/4"},{"anchor":"gettext/2","id":"gettext/2"},{"anchor":"gettext_comment/1","id":"gettext_comment/1"},{"anchor":"gettext_noop/1","id":"gettext_noop/1"},{"anchor":"handle_missing_bindings/2","id":"handle_missing_bindings/2"},{"anchor":"handle_missing_plural_translation/6","id":"handle_missing_plural_translation/6"},{"anchor":"handle_missing_translation/4","id":"handle_missing_translation/4"},{"anchor":"lgettext/5","id":"lgettext/5"},{"anchor":"lngettext/7","id":"lngettext/7"},{"anchor":"ngettext/4","id":"ngettext/4"},{"anchor":"ngettext_noop/2","id":"ngettext_noop/2"},{"anchor":"pgettext/3","id":"pgettext/3"},{"anchor":"pgettext_noop/2","id":"pgettext_noop/2"},{"anchor":"pngettext/5","id":"pngettext/5"},{"anchor":"pngettext_noop/3","id":"pngettext_noop/3"}]}],"sections":[],"title":"Astarte.FlowWeb.Gettext"},{"group":"","id":"Astarte.FlowWeb.HealthPlug","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"call/2","id":"call/2"},{"anchor":"init/1","id":"init/1"}]}],"sections":[],"title":"Astarte.FlowWeb.HealthPlug"},{"group":"","id":"Astarte.FlowWeb.MetricsPlug","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"call/2","id":"call/2"},{"anchor":"init/1","id":"init/1"}]}],"sections":[],"title":"Astarte.FlowWeb.MetricsPlug"},{"group":"","id":"Astarte.FlowWeb.PipelineController","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"create/2","id":"create/2"},{"anchor":"delete/2","id":"delete/2"},{"anchor":"index/2","id":"index/2"},{"anchor":"show/2","id":"show/2"}]}],"sections":[],"title":"Astarte.FlowWeb.PipelineController"},{"group":"","id":"Astarte.FlowWeb.PipelineView","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"__resource__/0","id":"__resource__/0"},{"anchor":"render/2","id":"render/2"},{"anchor":"template_not_found/2","id":"template_not_found/2"}]}],"sections":[],"title":"Astarte.FlowWeb.PipelineView"},{"group":"","id":"Astarte.FlowWeb.Plug.AuthorizePath","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"call/2","id":"call/2"},{"anchor":"init/1","id":"init/1"}]}],"sections":[],"title":"Astarte.FlowWeb.Plug.AuthorizePath"},{"group":"","id":"Astarte.FlowWeb.Plug.GuardianAuthorizePath","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"call/2","id":"call/2"},{"anchor":"init/1","id":"init/1"}]}],"sections":[],"title":"Astarte.FlowWeb.Plug.GuardianAuthorizePath"},{"group":"","id":"Astarte.FlowWeb.Plug.VerifyHeader","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"call/2","id":"call/2"},{"anchor":"init/1","id":"init/1"}]}],"sections":[],"title":"Astarte.FlowWeb.Plug.VerifyHeader"},{"group":"","id":"Astarte.FlowWeb.Router","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"api/2","id":"api/2"},{"anchor":"call/2","id":"call/2"},{"anchor":"init/1","id":"init/1"}]}],"sections":[],"title":"Astarte.FlowWeb.Router"},{"group":"","id":"Astarte.FlowWeb.Router.Helpers","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"block_path/3","id":"block_path/3"},{"anchor":"block_path/4","id":"block_path/4"},{"anchor":"block_path/5","id":"block_path/5"},{"anchor":"block_url/3","id":"block_url/3"},{"anchor":"block_url/4","id":"block_url/4"},{"anchor":"block_url/5","id":"block_url/5"},{"anchor":"flow_path/3","id":"flow_path/3"},{"anchor":"flow_path/4","id":"flow_path/4"},{"anchor":"flow_path/5","id":"flow_path/5"},{"anchor":"flow_url/3","id":"flow_url/3"},{"anchor":"flow_url/4","id":"flow_url/4"},{"anchor":"flow_url/5","id":"flow_url/5"},{"anchor":"path/2","id":"path/2"},{"anchor":"pipeline_path/3","id":"pipeline_path/3"},{"anchor":"pipeline_path/4","id":"pipeline_path/4"},{"anchor":"pipeline_path/5","id":"pipeline_path/5"},{"anchor":"pipeline_url/3","id":"pipeline_url/3"},{"anchor":"pipeline_url/4","id":"pipeline_url/4"},{"anchor":"pipeline_url/5","id":"pipeline_url/5"},{"anchor":"static_integrity/2","id":"static_integrity/2"},{"anchor":"static_path/2","id":"static_path/2"},{"anchor":"static_url/2","id":"static_url/2"},{"anchor":"url/1","id":"url/1"}]}],"sections":[],"title":"Astarte.FlowWeb.Router.Helpers"},{"group":"","id":"Astarte.FlowWeb.Telemetry","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"child_spec/1","id":"child_spec/1"},{"anchor":"metrics/0","id":"metrics/0"},{"anchor":"start_link/1","id":"start_link/1"}]}],"sections":[],"title":"Astarte.FlowWeb.Telemetry"},{"group":"","id":"Astarte.FlowWeb.UserSocket","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"connect/3","id":"connect/3"},{"anchor":"id/1","id":"id/1"}]}],"sections":[],"title":"Astarte.FlowWeb.UserSocket"}],"tasks":[]}